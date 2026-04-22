from fastapi import FastAPI
from schemas import TextRequest
from model import generate_summary
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Email Summarizer API running"}

@app.post("/summarize")
def summarize(request: TextRequest):
    summary = generate_summary(request.text)
    return {"summary": summary}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)