const https = require('https')

const projectId = '1qmt...XXX'
const projectSecret = 'c920...XXX'

const options = {
  host: 'ipfs.infura.io',
  port: 5001,
  path: '/api/v0/pin/cat?arg=QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn',
  method: 'POST',
  auth: "1yMVD6UK7R33PIatmGgyVVIqHVB" + ':' + "55f79f348c407b124c4de1e4a0938e7a"
}

let req = https.request(options, (res) => {
  let body = ''
  res.on('data', function (chunk) {
    body += chunk
  })
  res.on('end', function () {
    console.log(body)
  })
})
req.end()