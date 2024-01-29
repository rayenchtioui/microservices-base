import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import routers
from app.routers.logs import monitor_pods

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routers.logs.router)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.on_event("startup")
async def start_monitoring():
    print("here")
