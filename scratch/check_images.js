const fs = require('fs');

function getImageHeader(filename) {
  const buf = fs.readFileSync(filename);
  console.log(filename, 'Length:', buf.length, 'Header:', buf.slice(0, 16).toString('hex'));
}

getImageHeader('public/images/gold_hotel_desk_bell.png');
getImageHeader('public/images/swiszta_team.png');
getImageHeader('public/images/hotel_careers_team.png');
getImageHeader('public/images/luxury_reception_banner.png');
