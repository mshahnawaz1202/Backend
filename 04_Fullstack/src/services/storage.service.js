const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: "private_MeSrWb310Sot7Xou/BLQwenD6+0=",
});

async function uploadFile(buffer) {
  const result = await client.files.upload({
    file: await toFile(buffer, "image.jpg"),
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadFile;