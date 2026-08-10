const fs = require('fs');

// Read PNG header and IHDR chunk
const buf = fs.readFileSync('public/images/gold_hotel_desk_bell.png');
console.log('PNG Magic:', buf.slice(0, 8).toString('hex'));
console.log('Width:', buf.readUInt32BE(16));
console.log('Height:', buf.readUInt32BE(20));
