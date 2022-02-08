#!/usr/bin/env python3
import sys
import re

import yaml
import os
import yamllint.linter as linter
from yamllint.config import YamlLintConfig


def load_as_yaml(filename):
    with open(filename) as f:
        front_matter = next(yaml.load_all(f, Loader=yaml.FullLoader))
    return yaml.dump(front_matter)


def extract_first_yaml_part(filename):
    """ extract first part of yaml file (yaml front matter metadata only) """
    output = ''
    with open(filename, encoding='utf-8') as file:
        inRecordingMode = False
        for line in file:
            if not inRecordingMode:
                if re.search(r'^---$', line):
                    inRecordingMode = True
                    output += line
            elif re.search(r'^---$', line):
                inRecordingMode = False
                break
            else:
                output += line

    return output


def validate_yaml(yaml_in, yaml_fn):
    """Check with yamllint the yaml syntaxes
    Looking for duplicate keys."""
    conf = """{"extends": "relaxed",
               "rules": {"trailing-spaces": {"level": "warning"},
                         "new-lines": {"level": "warning"},
                         "new-line-at-end-of-file": {"level": "warning"},
                         "indentation": False,
                         "line-length": False,
                         "trailing-spaces": False,
                         }}"""
    s = extract_first_yaml_part(yaml_in)

    out = linter.run(s, YamlLintConfig(conf))

    for problem in out:
        msg = '::%(level)s file=%(fn)s,line=%(line)s,col=%(col)s:: [%(level)s] %(msg)s' % {'fn': yaml_fn,
                                                                                           'line': problem.line,
                                                                                           'col': problem.column,
                                                                                           'level': problem.level,
                                                                                           'msg': problem.message}

        if problem.level == "error":
            print(msg)


def main():

    for file in sys.argv[1:]:
        if os.path.isfile(file):
            validate_yaml(file, file)
        else:
            raise ValueError("::error file not found {}".format(file))


if __name__ == '__main__':
    main()
