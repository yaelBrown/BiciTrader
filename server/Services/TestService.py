import mysql.connector
import json

from flask import jsonify, make_response
from .Config import Config

db = Config()

class TestService:
  def __init__(self):
    # self.conn = dbConn
    self.table = "Test"

  def getTestData(self):
    db.cur.execute("SELECT * FROM test")
    res = db.cur.fetchall()

    out = []

    for r in res: 
      out.append({
        "id": r[0],
        "name": r[1],
        "age": r[2]
      })

    return out
  

# if __name__ == "__main__":
#   ts = TestService()

#   ts.getTestData()