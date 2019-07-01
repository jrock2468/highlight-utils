#!/bin/sh

set -e

./scripts/compile.sh

cd ./dist

docker run --env-file ../.env -v "$PWD":/var/task lambci/lambda:nodejs8.10 index.handler '{"Records":[{"ses":{"mail":{"messageId":"6uc881tec4e6f4e797poiq8dkp3h06u2o3a4cu01"}}}]}'
