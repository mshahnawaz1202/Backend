const ImageKit = require('@imagekit/nodejs')


const imagekit = new ImageKit({
    privateKey: 'private_MeSrWb310Sot7Xou/BLQwenD6+0=',
    publicKey: "public_47FgbRIibQ5ChoA25ays2GfrmjA="
})


async function uploadFile(buffer) {
    const result = await imagekit.client.upload({
        file:buffer,
        fileName : "image.jpg"
    })
    return result
    
}


module.exports = uploadFile




