from api.posts.routes import router as posts_router
from fastapi import FastAPI

app = FastAPI(title="NuxtExpert API")

app.include_router(posts_router, prefix="/api/posts")

@app.get("/")
async def root():
    return {"message": "NuxtExpert API"}