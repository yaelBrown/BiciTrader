from flask import Flask, Blueprint, jsonify

HomeController = Blueprint('HomeController', __name__)

@HomeController.route('/', methods=['GET'])
def getHome():
  return {"msg": "Home Controller is working", "status": 200 }