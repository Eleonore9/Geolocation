#!/usr/bin/python
import os, sys
from flask import Flask, render_template, request
from test_geocoding import *
import json

#port = int(os.environ.get('PORT', 33507))
#heroku config:add PORT=33507

app = Flask(__name__)
app.secret_key = 'not_a_secret'
app.config.update(
	DEBUG = True,
)

#One page app
@app.route('/')
def index():
	return render_template('index.html')

#To call the api from the client-side using Ajax
@app.route('/api/distance-to-office')
def distance():
	latitude = request.args.get('latitude')
	longitude = request.args.get('longitude')																										
	distance = distance_on_unit_sphere(float(latitude), float(longitude), OFFICE_LOCATION[0], OFFICE_LOCATION[1])
	return json.dumps({"distance": distance})

if __name__ == '__main__':
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)
