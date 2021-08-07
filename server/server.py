from flask import Flask
from flask_cors import CORS

from Controllers.HomeController import HomeController
from Controllers.TestController import TestController

app = Flask(__name__, static_url_path='')

app.register_blueprint(HomeController, url_prefix='/')
app.register_blueprint(TestController, url_prefix='/api/test/')

CORS(app)


if __name__ == "__main__":
  app.run(port=5000, debug=True)