from fastapi.testclient import TestClient

from server.main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "NuxtExpert API"}

def test_get_posts():
    response = client.get("/api/posts/")
    assert response.status_code == 200
    assert response.json() == {"posts": []}