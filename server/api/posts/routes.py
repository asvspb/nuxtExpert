from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..db import get_db

router = APIRouter()

@router.get("/")
async def get_posts(db: AsyncSession = Depends(get_db)):
    # TODO: implement posts query
    return {"posts": []}