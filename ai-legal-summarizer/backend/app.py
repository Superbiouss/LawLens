from fastapi import FastAPI
from routes.summarize import router as summarize_router

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Legal Summarizer API"}

app.include_router(summarize_router, prefix="/summarize", tags=["summarize"])