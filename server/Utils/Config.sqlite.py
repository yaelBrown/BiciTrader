import sqlite3

class Config:
  def __init__(self):
    try:
      sqliteConn = sqlite3.connect("DB/database.db")
      print("db connected")
    except Exception as e: 
      print({ "msg": "Error connecting to db", "error": e })


  def createTestTable(self):
    return 'CREATE TABLE "test" ( "id"	INTEGER, "name"	TEXT, "age"	INTEGER, PRIMARY KEY("id") );'