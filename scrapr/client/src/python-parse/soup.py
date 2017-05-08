from bs4 import BeautifulSoup
import json


with open("sjfadata.html") as fp:
	soup = BeautifulSoup(fp, "lxml")

tables = soup.find_all("div", class_='compTable')
leagueTable = tables[0].find_all("div", class_='compTableRow')

matches = []

# iterate through compTable, take id from this rather than competition stringy name?

def scrape_data(table):
	competition = table[0].find("div", class_='compTableHead').text
	for i in range (1, len(table)):
		match = table[i]
		matches.append({
			"competition": competition,
			"date":match.find("div", class_='cellDate').text,	
			"ko":match.find("div", class_='cellKO').text,
			"home":match.find("div", class_='cellClubHome').text,
			"homeScore":match.find_all("div", class_='cellScore')[0].text,
			"away":match.find("div", class_='cellClubAway').text,
			"awayScore":match.find_all("div", class_='cellScore')[1].text,
			"venue": match.find("div", class_='cellVenue').text

		}),



scrape_data(leagueTable)

with open('league.json', 'w') as outfile:
	json.dump(matches, outfile)
