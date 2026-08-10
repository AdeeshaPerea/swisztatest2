const fs = require('fs');

const files = [
  'public/images/gold_hotel_desk_bell.png',
  'public/images/luxury_reception_banner.png',
  'public/images/concierge_hero.jpg',
  'public/images/reception_frontdesk.jpg',
  'public/images/swiszta_team.png'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const stat = fs.statSync(f);
    console.log(f, stat.size);
  } else {
    console.log(f, 'NOT FOUND');
  }
});
