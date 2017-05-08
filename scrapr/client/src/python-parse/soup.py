from bs4 import BeautifulSoup
import json


with open("sjfadata.html") as fp:
	soup = BeautifulSoup(fp, "lxml")

tables = soup.find_all("div", class_='compTable')
leagueTable = tables[0]

matches = []


# iterate through compTable, take id from this rather than competition stringy name?

def scrape_data(table):
	# the overall table id, refers directly to competition
	competition = table.attrs['id']

	# returns matchtable - this has round information helpfully removed
	matchTables = leagueTable.find_all('div', class_='matchTable')
	for matchTable in matchTables:
		# now get the compRows; these contain the actual fixture elements
		allMatchesInTable = matchTable.find_all('div', class_='compTableRow')

		for match in allMatchesInTable:
		
			matches.append({
				"competition": competition,
				"date":match.find("div", class_='cellDate').text,	
				"ko":match.find("div", class_='cellKO').text,
				"home":match.find("div", class_='cellClubHome').text,
				"homeScore":match.find_all("div", class_='cellScore')[0].text,
				"away":match.find("div", class_='cellClubAway').text,
				"awayScore":match.find_all("div", class_='cellScore')[1].text,
				"venue": match.find("div", class_='cellVenue').text,
				"center": match.find("div", class_='cellCenter').text	

			}),



scrape_data(leagueTable)

with open('league.json', 'w') as outfile:
	json.dump(matches, outfile)
