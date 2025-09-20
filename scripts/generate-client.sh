#! /usr/bin/env bash

set -e
set -x

cd backend
python -c "import app.main; import json; print(json.dumps(app.main.app.openapi()))" > ../openapi.json
cd ..

cp openapi.json frontend-nextjs/
mv openapi.json frontend/apps/web

# Todo: enable later
# cd frontend/apps/web
# pnpm run generate-client
# pnpm exec biome format --write ./client
# cd ../../../frontend-nextjs


cd frontend-nextjs
pnpm run generate-client
pnpm exec biome format --write ./src/client

cd ..
