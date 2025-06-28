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

```
