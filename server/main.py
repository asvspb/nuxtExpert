from fastapi import FastAPI
from api.posts.routes import router as posts_router

app = FastAPI(title="NuxtExpert API")

app.include_router(posts_router, prefix="/api/posts")

@app.get("/")
async def root():
    return {"message": "NuxtExpert API"}