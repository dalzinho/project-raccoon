const fs = require('fs');
const path = require('path');


function writeToDisk(data, filename){
  fs.writeFile(path.join(`../../json/${filename}`), JSON.stringify(data), (error) =>{
    if(error){ console.log('Error:', error)}
      else {console.log(`${filename} written to json folder`)}
    })
}

module.exports = writeToDisk;