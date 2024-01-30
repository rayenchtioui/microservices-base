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


async def monitor_pods():
    print("monitoring pods")
    config.load_incluster_config()
    k8s_client = client.ApiClient()
    dyn_client = DynamicClient(k8s_client)
    v1_pods = dyn_client.resources.get(api_version='v1', kind='Pod')
    w = watch.Watch()
    print("v1_pods.get:", v1_pods.get)
    for event in w.stream(v1_pods.get, namespace='test'):
        pod = event['object']
        if pod.status.phase == "Failed":
            await send_mail_logs("chtiouirayyen@gmail.com", f"Pod {pod.metadata.name} has failed.")