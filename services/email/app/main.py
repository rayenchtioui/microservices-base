import asyncio
from fastapi import BackgroundTasks, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import routers
from app.routers.logs import monitor_pods
import asyncio
import threading

app = FastAPI()
async def periodic_monitoring():
    while True:
        await monitor_pods()
        await asyncio.sleep(100)

def start_background_loop(loop):
    asyncio.set_event_loop(loop)
    loop.run_forever()

@app.on_event("startup")
def startup_event():
    print("Starting monitoring in the background!")
    loop = asyncio.new_event_loop()
    threading.Thread(target=start_background_loop, args=(loop,), daemon=True).start()
    asyncio.run_coroutine_threadsafe(periodic_monitoring(), loop)
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
