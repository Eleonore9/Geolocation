import math
import sys

#Global variables
#Location of Migreat office
OFFICE_LOCATION = (51.521328,-0.109799)
#Conversion rate from degrees to radians
DEGREES_TO_RADIANS = math.pi/180.0
#Conversion rate to get the distance in kilometers
EARTH_RADIUS_IN_KM = 6373


def latitude_to_phi(latitude):
    """ Takes in a number in degrees and returns 
    its value in radians """

    try:
        return (90.0 - latitude) * DEGREES_TO_RADIANS
    except TypeError:
        print "Please enter a number"

def longitude_to_theta(longitude):
    """ Takes in a number in degrees and returns 
    its value in radians """

    try:
        return longitude * DEGREES_TO_RADIANS
    except TypeError:
        print "Please enter a number"

def distance_on_unit_sphere(lat1, long1, lat2, long2):
    """Takes in 4 numbers that are the latitudes and 
    longitudes of 2 positions and returns a float that
    is the distance between them in kilometers """

    #Angles Phis between the latitudes and the equator
    phi1 = latitude_to_phi(lat1)
    phi2 = latitude_to_phi(lat2)
    #Angles Thetas between the longitudes and prime meridian
    theta1 = longitude_to_theta(long1)
    theta2 = longitude_to_theta(long2)

    #Calculate the spherical distance (arc) from spherical coordinates.
    cos = (math.sin(phi1)*math.sin(phi2)*math.cos(theta1 - theta2) + 
     math.cos(phi1)*math.cos(phi2))
    arc = math.acos( cos )

    return arc * EARTH_RADIUS_IN_KM

#print distance_on_unit_sphere(float(sys.argv[1]), float(sys.argv[2]), OFFICE_LOCATION[0], OFFICE_LOCATION[1])