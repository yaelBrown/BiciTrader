from flask import Flask
from flask_cors import CORS

from Controllers.HomeController import HomeController

app = Flask(__name__, static_url_path='')
app.register_blueprint(HomeController, url_prefix='/')

CORS(app)


if __name__ == "__main__":
  app.run(port=5000, debug=True)