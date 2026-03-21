from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows your GitHub Pages site to call this backend

visits = 0

@app.get("/counter")
def counter():
    global visits
    visits += 1
    return {"visits": visits}

if __name__ == "__main__":
    app.run()
