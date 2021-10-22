import {INFURA_ADDRESS, TEST_INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";
import { connectToDatabase } from "../../lib/mongodb";

const test_infura_address = TEST_INFURA_ADDRESS
const main_infura_address= INFURA_ADDRESS

const slug_api = async(req, res) => {

  const { db } = await connectToDatabase();	
	const traits = await db
    .collection("Sluggies")
    .find({})
    .toArray();
  
  // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT

  // comment for mainnet
  //const provider = new Web3.providers.HttpProvider(test_infura_address)

  // uncomment for mainnet
  const provider = new Web3.providers.HttpProvider(main_infura_address)

  const web3_infura = new Web3(provider);
  const slug_contract = new web3_infura.eth.Contract(ABI, ADDRESS)

  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
//   const totalSupply = await slug_contract.methods.totalSupply().call();
//   console.log(totalSupply)

// THE ID YOU ASKED IN THE URL
  const query = req.query.id;


  // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
//  if(parseInt(query) < totalSupply) {
  const total_sluggies = 10000;
  if(parseInt(query) < total_sluggies) {


    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const token_name_call = await slug_contract.methods.slugNames(query).call();
    let token_name = `#${query}${(token_name_call === '') ? "" : ` - ${token_name_call}`}`
    
    const signatures = [420, 1345, 2528 , 3833, 5568, 6585, 7154, 9000]
    const trait = traits[parseInt(query)]

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    if ( signatures.includes( parseInt( query ) ) ) {
    
      metadata = {
        "name": token_name,
        "description": "There are 40,000 species of gastropods on earth, but here in The Slug Club we have 10,000 exotic Sluggies for you to collect! Our 3 person team has personally cared for these creatures and are looking forward to them going to good homes!",
        "tokenId" : parseInt(query),
        "image": `https://ipfs.io/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.slugclubnft.com",
        "attributes": [   
          {
            "trait_type": "Signature Sluggies",
            "value": trait["Signature Sluggies"]
          }    
        ]
      }
    } else {
    // GENERAL Slug METADATA
      metadata = {
        "name": token_name,
        "description": "There are 40,000 species of gastropods on earth, but here in The Slug Club we have 10,000 exotic Sluggies for you to collect! Our 3 person team has personally cared for these creatures and are looking forward to them going to good homes!",
        "tokenId" : parseInt(query),
        "image": `https://ipfs.io/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.slugclubnft.com",
        "attributes": [          
            {
              "trait_type": "Background",
              "value": trait["Background"]
            },
            {
              "trait_type": "Stomach",
              "value": trait["Stomach"]
            },
            {
              "trait_type": "Back",
              "value": trait["Back"]
            },
            {
              "trait_type": "Eyes",
              "value": trait["Eyes"]
            },
            {
              "trait_type": "Mouth",
              "value": trait["Mouth"]
            },
            {
              "trait_type": "Shell",
              "value": trait["Shell"]
            },
            {
              "trait_type": "Top Prop",
              "value": trait["Top Prop"]
            },
            {
              "trait_type": "Middle Prop",
              "value": trait["Middle Prop"]
            },
            {
              "trait_type": "Bottom Prop",
              "value": trait["Bottom Prop"]
            }
        ]
      }
    }
    
    res.statusCode = 200
    res.json(metadata)
    //db.close();
  } else {
    res.statuscode = 404
    res.json({error: "The slug you requested is out of range"})
    //db.close();
  }
}

export default slug_api
