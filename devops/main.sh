#! /bin/bash
# Author : @kryfin

set -o nounset
set -o errexit

cat ./abc.txt \
    | grep  usman \
    > output.txt