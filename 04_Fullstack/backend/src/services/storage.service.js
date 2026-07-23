const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const result = await client.files.upload({
    file: await toFile(buffer, "image.jpg"),
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadFile;