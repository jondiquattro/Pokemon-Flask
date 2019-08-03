from flask import Flask, jsonify, json
import requests

app=Flask(__name__)
url='https://pokeapi.co/api/v2/pokemon/1/'

@app.route('/')
def helloWorld():
  r = requests.get('https://pokeapi.co/api/v2/pokemon-species')
  return jsonify(r.text)


if __name__ == '__main__':
  app.run('0.0.0.0', debug = True)
