const fs = require('fs');

function getImageHeader(filename) {
  if (!fs.existsSync(filename)) {
    console.log(filename, 'DOES NOT EXIST!');
    return;
  }
  const buf = fs.readFileSync(filename);
  console.log(filename, 'Length:', buf.length);
}

getImageHeader('public/images/gold_hotel_desk_bell.png');
getImageHeader('public/images/swiszta_team.png');
getImageHeader('public/images/hotel_careers_team.png');
getImageHeader('public/images/luxury_reception_banner.png');
