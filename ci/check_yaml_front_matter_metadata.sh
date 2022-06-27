#!/bin/bash
#
# check_yaml_front_matter_metadata.sh ["path/to/files/*.md"]
#   - extract first part of yamlfile (metadata only)
#   - execute yamllint on this part, and output error if any
#   - yamllint configuration is defined in "ci/check_yaml_front_matter_metadata.py"
#
set -euo pipefail

DIR="${1:? $(basename $0) path/to/md_files}"

error=0
set +e
( ci/check_yaml_front_matter_metadata.py ${DIR} | grep "::error" ) && error=1

exit $error
