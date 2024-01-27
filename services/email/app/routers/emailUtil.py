from typing import List
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from ..config import settings
from jinja2 import Environment, select_autoescape, PackageLoader

conf = ConnectionConfig(
    MAIL_USERNAME=settings.mail_username,
    MAIL_PASSWORD=settings.mail_password,
    MAIL_FROM=settings.mail_from,
    MAIL_PORT=587,
    MAIL_SERVER=settings.mail_server,
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)
env = Environment(
    loader=PackageLoader('app', 'templates'),
    autoescape=select_autoescape(['html', 'xml'])
)

async def send_email(subject: str, recipients: List, email: str, additional_props: dict = {}):
    template = env.get_template("email_template.html")
    html = template.render(
        name=email,
        subject=subject,
        **additional_props
    )

    message = MessageSchema(
        subject=subject,
        recipients=recipients,
        html=html,
        subtype="html"
    )

    fm = FastMail(conf)
    await fm.send_message(message)
