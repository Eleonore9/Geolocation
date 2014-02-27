from flask import Flask, render_template, request
from test_geocoding import *
import json

app = Flask(__name__)
app.secret_key = 'not_a_secret'

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/api/distance-to-office')
def distance():
	latitude = request.args.get('latitude')
	longitude = request.args.get('longitude')																										
	distance = distance_on_unit_sphere(float(latitude), float(longitude), OFFICE_LOCATION[0], OFFICE_LOCATION[1])
	return json.dumps({"distance": distance})

if __name__ == '__main__':
	app.run()