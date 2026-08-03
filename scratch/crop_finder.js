const fs = require('fs');

// Simple JPEG baseline decoder to find bounding box of non-white pixels
const buf = fs.readFileSync('public/logo.jpg');

console.log('Buffer length:', buf.length);
