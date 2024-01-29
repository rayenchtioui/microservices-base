from fastapi import APIRouter
from .emailUtil import send_email
from kubernetes import client, config, watch
from openshift.dynamic import DynamicClient
import requests
import httpx

router = APIRouter(
    prefix="/logs",
    tags=['Logs']
)

async def send_mail_logs(email: str,pod_name: str):
    subject = "Logs"
    recipients = [email]
    await send_email(subject, recipients, email, pod_name)

@router.post('/sendLogs')
async def send_logs(entry: str, email: str):
    await send_mail_logs(email,entry)
    return {"message": "email has been sent"}

fastapi_endpoint = "http://email-test-email.apps.na46a.prod.ole.redhat.com/sendLogs"

async def send_failure_notification(email, message):
    payload = {'email': email, 'entry': message}
    async with httpx.AsyncClient() as client:
        response = await client.post(fastapi_endpoint, json=payload)
        print(response)

async def monitor_pods():
    print("monitoring pods")
    await send_failure_notification("chtiouirayyen@gmail.com", "Pod  has failed.")
    config.load_incluster_config()
    k8s_client = client.ApiClient()
    dyn_client = DynamicClient(k8s_client)
    v1_pods = dyn_client.resources.get(api_version='v1', kind='Pod')
    w = watch.Watch()

    for event in w.stream(v1_pods.get, namespace='test-email'):
        pod = event['object']
        if pod.status.phase == "Failed":
            await send_failure_notification("chtiouirayyen@gmail.com", f"Pod {pod.metadata.name} has failed.")
