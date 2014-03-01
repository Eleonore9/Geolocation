Geolocation ~ How far are you from our office?
============================

About this project
------------------

I wrote a python script to calculate the distance between two locations using their coordinates (latitude and longitude): <https://github.com/Eleonore9/Geolocation/blob/master/test_geocoding.py>.
It is imported in my Python/Flask server (<https://github.com/Eleonore9/Geolocation/blob/master/server.py>) and returns a distance upon request using the route '/api/distance-to-office'.

The user's current location is retrieved using HTML5 geolocation if the user enables it.
It is also used to display the user's location and office ocation on a map when clicking the 'View on a map' button.

Run it locally
--------------

* Clone it: 		git clone git@github.com:Eleonore9/Geolocation.git
* Activate the virtual environement:		source migreat/bin/activate
* Just run it:		python server.py

![screenshotGeo](https://raw.github.com/Eleonore9/Geolocation/master/static/img/Migreat.png)
