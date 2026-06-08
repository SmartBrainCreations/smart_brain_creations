const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');
const sharp = require('sharp');

const input = path.join(__dirname, '..', 'public', 'logo.png');
const tmp = path.join(__dirname, 'tmp-square-logo.png');
const output = path.join(__dirname, '..', 'public', 'favicon.ico');

async function makeSquareAndConvert() {
  if (!fs.existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  try {
    const meta = await sharp(input).metadata();
    const size = Math.max(meta.width || 256, meta.height || 256);
    const left = Math.floor((size - (meta.width || size)) / 2);
    const top = Math.floor((size - (meta.height || size)) / 2);

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input, left, top }])
      .resize(256, 256)
      .png()
      .toFile(tmp);

    const icoBuf = await pngToIco(tmp);
    fs.writeFileSync(output, icoBuf);
    fs.unlinkSync(tmp);
    console.log('Created', output);
  } catch (err) {
    console.error('Failed to create favicon.ico:', err);
    process.exit(1);
  }
}

makeSquareAndConvert();
