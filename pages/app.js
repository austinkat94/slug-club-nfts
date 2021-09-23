const IPFS = require("ipfs-core")

async function main () {

const node = await IPFS.create()

const cid = "QmWfY26GE7exeyfVm83Ep6jpcHSqC9utb2Sj3UUUQYT3px"

const response = await ipfs.get(cid)

console.log(response.text)

}

main()