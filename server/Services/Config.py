import mysql.connector

class Config: 
  def __init__(self):
    self.db = mysql.connector.connect(
      host="localhost",
      user="root",
      password="hola",
      database="bicitrader",
      auth_plugin='sha256_password'
    )

    self.cur = self.db.cursor()