const IPFS = require('ipfs')

const main = async(req, res) => {
    const node = await IPFS.create()

    const stream = node.cat('QmWfY26GE7exeyfVm83Ep6jpcHSqC9utb2Sj3UUUQYT3px')
    let data = ''

    for await (const chunk of stream) {
    // chunks of data are returned as a Buffer, convert it back to a string
    data += chunk.toString()
    }

    console.log(data)
}
export default main