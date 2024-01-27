from pydantic import BaseSettings

class Settings(BaseSettings):
    mail_username: str
    mail_password: str
    mail_from: str
    mail_server: str

    class Config:
        env_file = '.env'

settings = Settings()
