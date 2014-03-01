Geolocation ~ How far are you from our office?
============================

I wrote a python script to calculate the distance between two locations using there coordinates (latitude and longitude): <https://github.com/Eleonore9/Geolocation/blob/master/test_geocoding.py>.
It is imported in my Python/Flask server (<https://github.com/Eleonore9/Geolocation/blob/master/server.py>) and return a distance upon request using the route '/api/distance-to-office'.

The user's current location is retrieved using HTML5 geolocation if the user enables it.
It is also used to display the user's location and office ocation on a map when clicking the 'View on a map' button.

![screenshotGeo](https://raw.github.com/Eleonore9/Geolocation/master/static/img/Migreat.png)
