```py

# .env file is passed here

# backend/app/core/config.py
class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../.env",

# local database url in Docker
SQLALCHEMY_DATABASE_URI=postgresql+psycopg://postgres:password@localhost:5432/app

# Dbeaver connection
url: jdbc:postgresql://localhost:5432/app
user: postgres
password: password

scripts folders in root and in /backend

# openapi.json is available on this url
http://localhost:8000/api/v1/openapi.json

# routes/pages

# auth
'/login'
'/recover-password'
'/reset-password'
'/signup'

# root
'/'
'/admin'
'/items'
'/settings'

----------
prettier formats all files, /backend in prettierignore
ruff formats /backend
---
docker-compose.yml special name, disabled format by containers extension
----
cant format (.json) in folder above node_modules
------------------
# standalone server.js path fro monorepo
githubcities/frontend/apps/web/.next/standalone/apps/web/server.js
SITE_URL can be different (env var) in each environment, but must be prefixed with NEXT_PUBLIC_* not to be inlined during build for static site
-------
dev and prod docker-compose.yml and folder structure must match

```
