#!/bin/bash

# Script d'analyse Git - Génération de rapport markdown
# Usage: ./git-analyzer.sh [dossier] [nombre_de_jours] [fichier_rapport]

set -e

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction d'aide
show_help() {
    echo "Usage: $0 [OPTIONS] [DOSSIER] [JOURS] [RAPPORT]"
    echo ""
    echo "Analyse les modifications Git d'un dossier et génère un rapport markdown"
    echo ""
    echo "Arguments:"
    echo "  DOSSIER     Dossier à analyser (défaut: répertoire courant)"
    echo "  JOURS       Nombre de jours à analyser (défaut: 7)"
    echo "  RAPPORT     Nom du fichier rapport (défaut: git-report.md)"
    echo ""
    echo "Options:"
    echo "  -h, --help  Affiche cette aide"
    echo "  -v, --verbose  Mode verbeux"
    echo "  -d, --debug    Mode debug (très verbeux)"
    echo ""
    echo "Exemples:"
    echo "  $0                           # Analyse le répertoire courant sur 7 jours"
    echo "  $0 src 14                    # Analyse le dossier 'src' sur 14 jours"
    echo "  $0 . 30 rapport-mensuel.md   # Analyse sur 30 jours avec rapport personnalisé"
}

# Variables par défaut
VERBOSE=0
DEBUG=0
TARGET_DIR="."
DAYS=7
REPORT_FILE="git-report.md"

# Analyse des arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -v|--verbose)
            VERBOSE=1
            shift
            ;;
        -d|--debug)
            VERBOSE=1
            DEBUG=1
            shift
            ;;
        -*)
            echo -e "${RED}Option inconnue: $1${NC}"
            show_help
            exit 1
            ;;
        *)
            if [[ -z "$TARGET_DIR_SET" ]]; then
                TARGET_DIR="$1"
                TARGET_DIR_SET=1
            elif [[ -z "$DAYS_SET" ]]; then
                DAYS="$1"
                DAYS_SET=1
            elif [[ -z "$REPORT_FILE_SET" ]]; then
                REPORT_FILE="$1"
                REPORT_FILE_SET=1
            else
                echo -e "${RED}Trop d'arguments${NC}"
                show_help
                exit 1
            fi
            shift
            ;;
    esac
done

# Fonction de log verbose
log_verbose() {
    if [[ $VERBOSE -eq 1 ]]; then
        echo -e "${BLUE}[INFO]${NC} $1"
    fi
}

# Fonction de log debug
log_debug() {
    if [[ $DEBUG -eq 1 ]]; then
        echo -e "${YELLOW}[DEBUG]${NC} $1"
    fi
}

# Vérification que nous sommes dans un repo Git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}Erreur: Ce répertoire n'est pas un repository Git${NC}"
    exit 1
fi

# Vérification que le dossier cible existe
if [[ ! -d "$TARGET_DIR" ]]; then
    echo -e "${RED}Erreur: Le dossier '$TARGET_DIR' n'existe pas${NC}"
    exit 1
fi

# Conversion du chemin relatif en absolu pour Git
TARGET_DIR=$(realpath "$TARGET_DIR")
# --relative-to="$(git rev-parse --show-toplevel)")

echo -e "${GREEN}🔍 Analyse du repository Git${NC}"
echo -e "📅 Période: ${YELLOW}$DAYS derniers jours${NC}"
echo -e "📄 Rapport: ${YELLOW}$REPORT_FILE${NC}"
echo ""

log_verbose "Calcul de la date de début d'analyse..."

# Calcul de la date de début
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    START_DATE=$(date -v-${DAYS}d +"%Y-%m-%d")
    START_DATE_FR=$(date -v-${DAYS}d +"%d-%m-%Y")
else
    # Linux
    START_DATE=$(date -d "$DAYS days ago" +"%Y-%m-%d")
    START_DATE_FR=$(date -d "$DAYS days ago" +"%d-%m-%Y")
fi

log_verbose "Date de début: $START_DATE"

# Informations générales du repo
REPO_NAME=$(basename "$(git rev-parse --show-toplevel)")
CURRENT_BRANCH=$(git branch --show-current)
TOTAL_COMMITS=$(git log --since="$START_DATE" --oneline -- "$TARGET_DIR" | wc -l)

# Génération du rapport markdown
log_verbose "Génération du rapport markdown..."

cat > "$REPORT_FILE" << EOF
# Rapport d'analyse Git - $REPO_NAME

**Période d'analyse:** $DAYS derniers jours (depuis le $START_DATE_FR)  

**Branche courante:** \`$CURRENT_BRANCH\`  

**Date de génération:** $(date '+%d-%m-%Y %H:%M:%S')

**Nombre de fichiers modifiés:** $(git log --since="$START_DATE" --name-only --pretty=format: -- "$TARGET_DIR" | sort -u | grep -v '^$' | wc -l)

**Nombre d'auteurs actifs:** $(git log --since="$START_DATE" --format='%an' -- "$TARGET_DIR" | sort -u | wc -l)

EOF

cat >> "$REPORT_FILE" << EOF

EOF

log_verbose "Analyse des fichiers modifiés..."

# Obtenir la liste des fichiers modifiés dans la période
MODIFIED_FILES=$(git log --since="$START_DATE" --name-only --pretty=format: -- "$TARGET_DIR" | sort -u | grep -v '^$')

if [[ -z "$MODIFIED_FILES" ]]; then
    echo "Aucune modification trouvée dans le dossier '$TARGET_DIR' durant les $DAYS derniers jours." >> "$REPORT_FILE"
else
    echo "$MODIFIED_FILES" | while IFS= read -r file; do
        if [[ -f "$file" ]]; then
            log_verbose "Traitement du fichier: $file"
            FILE_NAME=$(basename -s .md $file)
            echo "" >> "$REPORT_FILE"
            echo "### 📄 [$FILE_NAME](https://beta.gouv.fr/startups/$FILE_NAME)" >> "$REPORT_FILE"
            echo "" >> "$REPORT_FILE"
            
            # Informations sur le fichier
            FILE_COMMITS=$(git log --since="$START_DATE" --oneline -- "$file" | wc -l)
            
            cat >> "$REPORT_FILE" << EOF
**Dernière modification:** $LAST_COMMIT_DATE  
#### 🔄 Changements depuis le début de la période

\`\`\`diff
EOF
            
            # Génération du diff global pour ce fichier depuis la date de début
            # Méthode 1: Essayer de trouver l'état du fichier avant la période
            BEFORE_PERIOD_COMMIT=$(git log --until="$START_DATE" --format="%H" -1 -- "$file" 2>/dev/null || echo "")
            
            log_debug "Fichier: $file"
            log_debug "Commit avant période: $BEFORE_PERIOD_COMMIT"
            
            if [[ -n "$BEFORE_PERIOD_COMMIT" ]]; then
                # Diff depuis l'état avant la période jusqu'à maintenant
                log_debug "Génération du diff depuis $BEFORE_PERIOD_COMMIT jusqu'à HEAD"
                DIFF_OUTPUT=$(git diff "$BEFORE_PERIOD_COMMIT" HEAD -- "$file" 2>/dev/null)
                if [[ -n "$DIFF_OUTPUT" ]]; then
                    echo "$DIFF_OUTPUT" >> "$REPORT_FILE"
                    log_debug "Diff généré avec succès ($(echo "$DIFF_OUTPUT" | wc -l) lignes)"
                else
                    echo "Aucune modification détectée pour ce fichier durant la période" >> "$REPORT_FILE"
                    log_debug "Aucun diff trouvé"
                fi
            else
                # Le fichier n'existait pas avant la période - c'est un nouveau fichier
                FIRST_COMMIT_IN_PERIOD=$(git log --since="$START_DATE" --reverse --format="%H" -- "$file" | head -n 1)
                log_debug "Premier commit dans la période: $FIRST_COMMIT_IN_PERIOD"
                
                if [[ -n "$FIRST_COMMIT_IN_PERIOD" ]]; then
                    {
                        echo "=== Nouveau fichier ajouté durant la période ==="
                        echo ""
                        # Montrer le contenu complet du fichier comme ajout
                        if git show "$FIRST_COMMIT_IN_PERIOD:$file" >/dev/null 2>&1; then
                            echo "--- /dev/null"
                            echo "+++ b/$file"
                            FILE_LINES=$(git show "$FIRST_COMMIT_IN_PERIOD:$file" | wc -l)
                            echo "@@ -0,0 +1,$FILE_LINES @@"
                            git show "$FIRST_COMMIT_IN_PERIOD:$file" | sed 's/^/+/'
                            log_debug "Nouveau fichier affiché ($FILE_LINES lignes)"
                        else
                            git show --name-status "$FIRST_COMMIT_IN_PERIOD" -- "$file"
                            log_debug "Statut du fichier affiché"
                        fi
                    } >> "$REPORT_FILE"
                else
                    echo "Erreur: Impossible de trouver les modifications pour ce fichier" >> "$REPORT_FILE"
                    log_debug "Erreur: Aucun commit trouvé pour ce fichier"
                fi
            fi
            
            echo "\`\`\`" >> "$REPORT_FILE"
            echo "" >> "$REPORT_FILE"
        else
            log_debug "Fichier supprimé ou non accessible: $file"
            # Gérer les fichiers supprimés
            echo "" >> "$REPORT_FILE"
            echo "### 📄 \`$file\` (supprimé)" >> "$REPORT_FILE"
            echo "" >> "$REPORT_FILE"
            echo "**Statut:** Fichier supprimé durant la période" >> "$REPORT_FILE"
            echo "" >> "$REPORT_FILE"
            echo "#### 🔄 Diff global (suppression)" >> "$REPORT_FILE"
            echo "" >> "$REPORT_FILE"
            echo "\`\`\`diff" >> "$REPORT_FILE"
            
            # Essayer de récupérer le contenu du fichier supprimé
            BEFORE_DELETE=$(git log --follow --format="%H" -1 -- "$file" 2>/dev/null || echo "")
            if [[ -n "$BEFORE_DELETE" ]]; then
                echo "--- a/$file" >> "$REPORT_FILE"
                echo "+++ /dev/null" >> "$REPORT_FILE"
                DELETED_LINES=$(git show "$BEFORE_DELETE:$file" | wc -l 2>/dev/null || echo "0")
                echo "@@ -1,$DELETED_LINES +0,0 @@" >> "$REPORT_FILE"
                git show "$BEFORE_DELETE:$file" 2>/dev/null | sed 's/^/-/' >> "$REPORT_FILE" || echo "Impossible de récupérer le contenu supprimé" >> "$REPORT_FILE"
            else
                echo "Impossible de récupérer l'historique du fichier supprimé" >> "$REPORT_FILE"
            fi
            
            echo "\`\`\`" >> "$REPORT_FILE"
            echo "" >> "$REPORT_FILE"
        fi
    done
fi

cat >> "$REPORT_FILE" << EOF

---

*Rapport généré automatiquement le $(date '+%d-%m-%Y à %H:%M:%S') par le script d'analyse Git*
EOF

echo -e "${GREEN}✅ Analyse terminée !${NC}"
echo -e "📄 Rapport généré dans: ${YELLOW}$REPORT_FILE${NC}"

# Affichage d'un résumé
echo ""
echo -e "${BLUE}📊 Résumé de l'analyse:${NC}"
echo -e "   • $TOTAL_COMMITS commit(s) trouvé(s)"
echo -e "   • $(echo "$MODIFIED_FILES" | wc -l) fichier(s) modifié(s)"
echo -e "   • $(git log --since="$START_DATE" --format='%an' -- "$TARGET_DIR" | sort -u | wc -l) contributeur(s) actif(s)"

if [[ $VERBOSE -eq 1 ]]; then
    echo ""
    echo -e "${BLUE}Contenu du rapport:${NC}"
    wc -l "$REPORT_FILE"
fi
