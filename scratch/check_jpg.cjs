const fs = require('fs');

function getJpegDimensions(filename) {
  const buf = fs.readFileSync(filename);
  let offset = 2;
  while (offset < buf.length) {
    const marker = buf.readUInt16BE(offset);
    if (marker >= 0xFFC0 && marker <= 0xFFC3) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      console.log(filename, 'JPEG Dimensions:', width, 'x', height);
      return { width, height };
    }
    offset += 2 + buf.readUInt16BE(offset + 2);
  }
}

getJpegDimensions('public/images/gold_hotel_desk_bell.png');
getJpegDimensions('public/images/swiszta_team.png');
getJpegDimensions('public/images/luxury_reception_banner.png');
