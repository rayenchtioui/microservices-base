from fastapi import APIRouter, Depends, status
from .emailUtil import send_email
from typing import Optional
import uuid
import datetime

router = APIRouter(
    prefix="/users",
    tags=['Users']
)

async def send_mail_logs(email: str):
    subject = "Logs"
    recipients = [email]
    await send_email(subject, recipients, email)

@router.post('/sendLogs')
async def send_logs(entry: str, email: str):
    await send_mail_logs(email)
    return {"message": "email has been sent"}
