const fs = require('fs');
const path = require('path');

let clubs = [

{
  fullName: "Arthurlie",
  prettyName: "Arthurlie",
  homeGround: {
    groundName: "Dunterlie Park",
    groundTown: "Barrhead",
    groundPostcode: "PA91",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444a79/1349463168137/1000w/10576389-12423976-thumbnail.jpg",
  twitter: "@arthurliefc",
  website: "http://www.arthurlie.com"
},
{
  fullName: "Auchinleck Talbot",
  prettyName: "Auchinleck",
  homeGround: {
    groundName: "Beechwood Park",
    groundTown: "Auchinleck",
    groundPostcode: "KA12",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444a7d/1349462491098/1000w/10576389-12551402-thumbnail.jpg",
  twitter: "@atfc1909",
  website: "null"
},
{
  fullName: "Beith Juniors",
  prettyName: "Beith",
  homeGround: {
    groundName: "Bellsdale Park",
    groundTown: "Beith",
    groundPostcode: "KA152AF",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444a7f/1349461648023/1000w/10576389-13623211-thumbnail.jpg",
  twitter: "@beithjuniorsfc",
  website: "http://www.beithjuniors.com"
},
{
  fullName: "Cumnock Juniors",
  prettyName: "Cumnock",
  homeGround: {
    groundName: "Townhead Park",
    groundTown: "Cumnock",
    groundPostcode: "KA181LZ",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444a8c/1318722139627/1000w/Cumnock.jpg",
  twitter: "@cumnockjuniorsfc",
  website: "http://www.cumnockjuniors.co.uk"
},
{
  fullName: "Glenafton Athletic",
  prettyName: "Glenafton",
  homeGround: {
    groundName: "Loch Park",
    groundTown: "New Cumnock",
    groundPostcode: "KA13",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444a98/1349461881293/1000w/10576389-15546177-thumbnail.jpg",
  twitter: "@flowgently",
  website: "null"
},
{
  fullName: "Hurlford United",
  prettyName: "Hurlford",
  homeGround: {
    groundName: "Blair Park",
    groundTown: "Hurlford",
    groundPostcode: "KA34",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444a9c/1349468482743/1000w/10576389-20538201-thumbnail.jpg",
  twitter: null,
  website: "http://www.hurlford.com"
},
{
  fullName: "Kilbirnie Ladeside",
  prettyName: "Kilbirnie",
  homeGround: {
    groundName: "Valefield Park",
    groundTown: "Kilbirnie",
    groundPostcode: "KA136DU",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444aa6/1349466460007/1000w/10576389-20537543-thumbnail.jpg",
  twitter: "@ladeside1901",
  website: "null"
},

{
  fullName: "Kilwinning Rangers",
  prettyName: "Kilwinning",
  homeGround: {
    groundName: "Abbey Park",
    groundTown: "Kilwinning",
    groundPostcode: "KA136DU",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444aaa/1349466586068/1000w/10576389-20537545-thumbnail.jpg",
  twitter: "@steadythebuffs",
  website: "null"
},
{
  fullName: "Kirkintilloch Rob Roy",
  prettyName: "KRR",
  homeGround: {
    groundName: "Guy's Meadow",
    groundTown: "Cumbernauld",
    groundPostcode: "G67",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444aac/1349466636243/1000w/10576389-20537546-thumbnail.jpg",
  twitter: "@robroy1878",
  website: "http://www.robroy.com"
},
{
  fullName: "Largs Thistle",
  prettyName: "Largs",
  homeGround: {
    groundName: "Barrfields Park",
    groundTown: "Largs",
    groundPostcode: "KA308NP",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444ab0/1349467037837/1000w/10576389-20537513-thumbnail.jpg",
  twitter: "@largsthistlefc",
  website: "http://www.largsthistle.org.uk"
},
{
  fullName: "Pollok",
  prettyName: "Pollok",
  homeGround: {
    groundName: "Newlandsfield",
    groundTown: "Glasgow",
    groundPostcode: "G432XR",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444ac5/1349467457473/1000w/10576389-20537505-thumbnail.jpg",
  twitter: "@pollokfc",
  website: "http://www.pollokfc.com"
},
{
  fullName: "Troon",
  prettyName: "Troon",
  homeGround: {
    groundName: "Portland Park",
    groundTown: "Troon",
    groundPostcode: "KA99",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444add/1349467988008/1000w/10576389-20537494-thumbnail.jpg",
  twitter: "@troon_fc",
  website: "http://www.troonfc.com"
},
]

fs.writeFile(path.join('clubInformation.json'), JSON.stringify(clubs), (error) =>{
  if(error){ console.log('Error:', error)}
    else {console.log(`Information on ${clubs.length} clubs written to json folder`)}
  })

// module.exports = clubs;