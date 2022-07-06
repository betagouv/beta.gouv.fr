#!/usr/bin/env python3
import requests
import json
import datetime
import os


beta_enable_http_api = os.environ.get("BETA_ENABLE_HTTP_API", False)  # True
# use http api files
beta_url_path = 'https://beta.gouv.fr'
# use local api files
beta_api_path = '_site'
incubators_api = '/api/v2.3/incubators.json'
startup_api = '/api/v2.3/startups_details.json'
member_api = '/api/v2.3/authors.json'


class ErrorLog:
    def __init__(self):
        self.error_members = list()
        self.error_startups = list()

    def member(self, message):
        self.error_members.append(message)
    
    def startup(self, message):
        self.error_startups.append(message)

    def print(self):
        print("error_startups_list:", len(self.error_startups))
        print("error_members_list:", len(self.error_members))
        print(*self.error_startups, sep="\n")
        print(*self.error_members, sep="\n")

    def has_errors(self):
        return (len(self.error_members) + len(self.error_startups)) > 0


error_log = ErrorLog()


def get_json_from_api(url):
    """Récupère les données disponibles à l'url fournie."""
    if beta_enable_http_api:
        return requests.get(beta_url_path + url).json()
    else:
        data_api = beta_api_path + url
        with open(data_api, 'r') as f:
            return json.load(f)


def is_ongoing_mission(mission):
    """Check si la mission (dict()) contient les données de début et de fin puis vérifie si elle est en cours ou non.

    Format attendu pour la mission :
    1. Les clés 'start' et 'end' sont dans la mission
    2. end est strictement antérieur à start
    Si la mission est mal formatée, lève l'exception "AttributeError"
    
    La mission est en cours si end est dans le futur. Remarque : start peut également être dans le futur, la mission sera quand même réputée en cours.
    """
    if 'start' not in mission or 'end' not in mission:
        raise AttributeError(f"Date de début ou de fin manquante : {mission}")
    try:
        start = datetime.date.fromisoformat(mission['start'])
        end = datetime.date.fromisoformat(mission['end'])
        if start > end or start == end:
            raise AttributeError(f"dates de mission incorrectes ( start {mission['start']} >= end {mission['end']} )")
    except ValueError:
            raise AttributeError(f"La date de fin ou la date de début n'est pas formatée correctement (YYYY-MM-DD): {mission}")

    # Mission valide
    now = datetime.date.today()
    if end > now or end == now:
        return True
    else:
        return False


def is_active_member(member):
    """Un membre actif est s'il a au moins 1 mission en cours (ongoing).
    Remarque: on profite de cette vérification pour logger les problèmes de format de missions"""
    # Cas 1: le membre n'a pas de missions dans son profil
    if 'missions' not in member:
        return False
    # cas 2: il y a des missions, on cherche une mission en cours
    ongoing = False
    for mission in member['missions']:
        try:
            ongoing |= is_ongoing_mission(mission)
        except AttributeError as e:
            error_log.member(f"::error title=erreur fiche de membre {member['id']}:: {e}")
    return ongoing


def check_beta_members(member_list):
    """Parcours la liste des membres pour indiquer: le nombre total, le nombre d'actifs et le nombre d'actifs sans startup de référencé."""
    active_member = [m for m in member_list if is_active_member(m)]
    active_member_no_startup_map = [m for m in active_member if 'previous' not in m and 'startups' not in m]

    print("total_member:", len(member_list))
    print("active_member:", len(active_member))
    print("active_member_with_no_startup_map:", len(active_member_no_startup_map))


def is_valid_phase(phase):
    """Vérifie que la phase d'une startup est correctement formatée"""
    if "name" in phase and phase["name"] in ["alumni", "success"]:
        # vérification des dates non nécessaires
        return True
    if "start" not in phase:
        raise AttributeError(f"La date de début de phase (start) est manquante: {phase}")
    try:
        start = datetime.date.fromisoformat(phase['start'])
    except ValueError:
        raise AttributeError(f"La date de début (start) n'est pas formatée correctement (YYYY-MM-DD): {phase}")
    if "end" in phase and not phase["end"] == "":
        try:
            end = datetime.date.fromisoformat(phase['end'])
            if start >= end:
                raise AttributeError(f"La date de début est après à la date de fin: {phase}")
        except ValueError:
            raise AttributeError(f"La date de fin (end) n'est pas formatée correctement (YYYY-MM-DD): {phase}")
    return True


def is_valid_startup(id, startup):
    """Vérifie que le format de la startup est valide"""
    # Edit Swann 20220630 : serait-ce intéressant de récupérer la date de fin (si elle est manquante) en utilisant la date de début de la phase suivante ? 
    # vérifier la présence de l'id
    valid = True
    if "id" not in startup:
        # Edit Swann 20220630 : Pas loggé, mais ça me paraît étonnant
        # error_log.startup(f"::error title=erreur fiche de startup {id}:: l'id est manquant: {startup}")
        valid = False
    if "phases" not in startup:
        # Edit Swann 20220630 : Pas loggé, mais ça me paraît étonnant
        # error_log.startup(f"::error title=erreur fiche de startup {id}:: les phases sont manquantes")
        valid = False
    else:
        for i, phase in enumerate(startup["phases"]):
            try:
                is_valid_phase(phase)
            except AttributeError as e:
                error_log.startup(f"::error title=erreur fiche de startup {startup['id']}:: erreur de phase: {e}")
                valid = False
    return valid


def is_active_startup(startup):
    """Une startup est toujours active sauf si elle a une phase "alumni" ou "success"."""
    try:
        return len([
            p["name"] for p in startup["phases"] 
            if p['name'] in ["alumni", "success"]
        ]) == 0
    except KeyError:
        return True


def check_beta_startup_details(startup_list):
        active_member_in_startup = set()
        active_member_in_active_startup = set()
        active_member_in_finished_startup = set()
        
        for id, startup in startup_list.items():
            # vérifie les formatage et enregistre les erreurs
            is_valid_startup(id, startup)
            if 'active_members' in startup:
                active_member_in_startup.update(startup['active_members'])
                if is_active_startup(startup):
                    active_member_in_active_startup.update(startup['active_members'])
                else:
                    active_member_in_finished_startup.update(startup['active_members'])

        print("active_member_in_startup:", len(active_member_in_startup))
        print("active_member_in_active_startup:", len(active_member_in_active_startup))
        print("active_member_in_finished_startup:", len(active_member_in_finished_startup))
        print("active_member_in_unknown_startup:", 0)


if __name__ == '__main__':
    check_beta_members(get_json_from_api(member_api))
    check_beta_startup_details(get_json_from_api(startup_api))
    
    error_log.print()
    if error_log.has_errors():
        exit(1)
    else:
        exit(0)
