from typing import List
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from jinja2 import Environment, select_autoescape, PackageLoader
import os
run_env = os.getenv("RUN_ENV")
mail_password = os.getenv("MAIL_PASSWORD")
mail_server = os.getenv("MAIL_SERVER")
mail_username = os.getenv("MAIL_USERNAME")
mail_from = os.getenv("MAIL_FROM")
conf = ConnectionConfig(
    MAIL_USERNAME=mail_username,
    MAIL_PASSWORD=mail_password,
    MAIL_FROM=mail_from,
    MAIL_PORT=587,
    MAIL_SERVER=mail_server,
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)
env = Environment(
    loader=PackageLoader('app', 'templates'),
    autoescape=select_autoescape(['html', 'xml'])
)

async def send_email(subject: str, recipients: List, email: str, pod_name: str, additional_props: dict = {}):
    template = env.get_template("email_template.html")
    html = template.render(
        name=email,
        pod_name=pod_name,
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
