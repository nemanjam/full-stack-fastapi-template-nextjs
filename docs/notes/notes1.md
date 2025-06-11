```py

# .env file is passed here

# backend/app/core/config.py
class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../.env",



```