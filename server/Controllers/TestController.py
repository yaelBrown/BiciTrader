from flask import Flask, Blueprint, jsonify

from Services.TestService import TestService

TestController = Blueprint('TestController', __name__)

ts = TestService()

@TestController.route('/', methods=['GET'])
def getTest():
  try: 
    return { "msg": "ok", "data": ts.getTestData() }
  except Exception as e: 
    return { "msg": "error: " + str(e) }

