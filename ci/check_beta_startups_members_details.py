#!/usr/bin/env python3
import requests
import json
import time

beta_enable_http_api = False  # True
# use http api files
beta_url_path = 'https://beta.gouv.fr'
# use local api files
beta_api_path = '_site'


def get_json_from_api(url):
    if beta_enable_http_api:
        data_api = beta_url_path + url
        data_doc = requests.get(data_api)
        data_json = data_doc.json()
    else:
        data_api = beta_api_path + url
        with open(data_api, 'r') as f:
            data_json = json.load(f)

    return data_json


def is_startup_phase(phases, phase):
    for p in phases:
        if phase in p['name']:
            return True
    return False


def main():

    incubators_api = '/api/v2.3/incubators.json'
    incubators_list = get_json_from_api(incubators_api)

    startup_api = '/api/v2.3/startups_details.json'
    startup_list = get_json_from_api(startup_api)

    member_api = '/api/v2.3/authors.json'
    member_list = get_json_from_api(member_api)

    error_members_list = []
    error_startups_list = []

    def check_beta_members():

        now = time.strftime("%Y-%m-%d")
        active_member = {}
        active_member_no_startup_map = {}
        for u in member_list:
            # member
            active = None
            if 'missions' in u:
                for m in u['missions']:
                    if 'start' not in m or 'end' not in m:
                        error_members_list.append(
                            f"# ERROR fiche de membre: {u}: aucune date de début et fin de mission : {m}")
                    if m['start'] >= m['end']:
                        error_members_list.append(
                            f"# ERROR fiche de membre: %s: dates de mission incorrecte ( start %s >= end %s ) " % (
                                u['id'], m['start'], m['end']))
                    elif m['start'] >= now:
                        # print(f"# WARNING membre: %s: date de mission dans le futur (start %s , end %s >= now )"%(u['id'],m['start'], m['end']))
                        pass
                    if m['end'] >= now:
                        active = True
                        active_member[u['id']] = active_member.get(
                            u['id'], 0) + 1

            if active and ('previous' not in u and 'startups' not in u):
                active_member_no_startup_map[u['id']] = active_member_no_startup_map.get(
                    u['id'], 0) + 1

        print("total_member:", len(member_list))
        print("active_member:", len(active_member))
        print("active_member_with_no_startup_map:",
              len(active_member_no_startup_map))

    def check_beta_startup_details():
        active_member_in_startup = {}
        active_member_in_active_startup = {}
        active_member_in_finished_startup = {}
        active_member_in_unknown_startup = {}

        for st in sorted(startup_list):
            state = None
            if 'id' in startup_list[st]:
                state = 'valid'
            phases = None
            active = None
            active_members = None
            if 'active_members' in startup_list[st]:
                active_members = len(startup_list[st]['active_members'])
                for i in startup_list[st]['active_members']:
                    active_member_in_startup[i] = active_member_in_startup.get(
                        i, 0) + 1

            if 'phases' in startup_list[st]:
                phases = len(startup_list[st]['phases'])
                if not (is_startup_phase(startup_list[st]['phases'], 'alumni') or
                        is_startup_phase(startup_list[st]['phases'], 'success')):
                    active = True

                    for p in startup_list[st]['phases']:
                        # print(p)
                        if 'start' not in p and 'end' not in p:
                            error_startups_list.append(
                                f"# ERROR fiche de startup: %s erreur de date: %s "
                                % (st, p))
                        elif 'start' in p and ('end' in p and len(p['end']) > 0):
                            if p['start'] >= p['end']:
                                error_startups_list.append(
                                    f"# ERROR fiche de startup: %s erreur de date (start %s >= end %s)" % (
                                        st, p['start'], p['end']))
                else:
                    active = False

            for user in startup_list[st]['active_members']:
                if active == True:
                    active_member_in_active_startup[user] = active_member_in_active_startup.get(
                        user, 0) + 1
                elif active == False:
                    # print(f"# ERROR fiche de membre: {user}: la Startup ({st}) est terminée au sein de beta.gouv.fr")
                    active_member_in_finished_startup[user] = active_member_in_finished_startup.get(
                        user, 0) + 1
                else:
                    error_members_list.append(
                        f"# ERROR fiche de membre: {user}: la reference de la Startup ({st}) est inconnue.")
                    active_member_in_unknown_startup[user] = active_member_in_unknown_startup.get(
                        user, 0) + 1

        print("active_member_in_startup:", len(active_member_in_startup))
        print("active_member_in_active_startup:",
              len(active_member_in_active_startup))
        print("active_member_in_finished_startup:",
              len(active_member_in_finished_startup))
        print("active_member_in_unknown_startup:",
              len(active_member_in_unknown_startup))

    check_beta_members()

    check_beta_startup_details()

    for err in sorted(error_startups_list):
        print(err)

    for err in sorted(error_members_list):
        print(err)


if __name__ == '__main__':
    main()
