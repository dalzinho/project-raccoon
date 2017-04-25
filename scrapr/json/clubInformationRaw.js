const fs = require('fs');
const path = require('path');

let clubs = [{
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
  fullName: "Auchinleck Talbot",
  prettyName: "Auchinleck",
  homeGround: {
    groundName: "Beechwood Park",
    groundTown: "Auchinleck",
    groundPostcode: "KA12",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444aaa/1349466586068/1000w/10576389-20537545-thumbnail.jpg",
  twitter: "@atfc1909",
  website: "null"
},
{
  fullName: "Glenafton Athletic",
  prettyName: "Glenafton",
  homeGround: {
    groundName: "Loch Park",
    groundTown: "New Cumnock",
    groundPostcode: "KA13",
  },
  crestUrl: "https://static1.squarespace.com/static/552138ebe4b0abe69be47a2c/55b234a2e4b03d4ada444a70/55b234a2e4b03d4ada444aaa/1349466586068/1000w/10576389-20537545-thumbnail.jpg",
  twitter: "@flowgently",
  website: "null"
}
]




// fs.writeFile(path.join('clubInformation.json'), JSON.stringify(clubs), (error) =>{
//   if(error){ console.log('Error:', error)}
//     else {console.log('clubInfo written to json folder')}
//   })

module.exports = clubs;