import urllib2

response = urllib2.urlopen('http://www.scottishfa.co.uk/sjfa/competition_clubs.cfm?page=1886&clubid=2955')

file = open("sjfadata.html", "w")
file.write(response.read())
file.close()