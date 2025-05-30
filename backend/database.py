import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")
print(MONGO_URI, "MONGODB_URI")
client = AsyncIOMotorClient(MONGO_URI)
db = client.acb_database
print(db)
users_collection = db.users
rooms_collection = db.rooms
tasks_collection = db.tasks
xp_logs_collection = db.xp_logs

def get_db():
    return db


