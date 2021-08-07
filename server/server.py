# from DB.Config import Config
from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_url_path='')
CORS(app)

# db = Config()

if __name__ == "__main__":
  app.run(port=5000, debug=True)