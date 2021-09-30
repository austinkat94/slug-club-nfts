import Head from 'next/head';
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js";

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_slugs, set_how_many_slugs] = useState(1)

  const [slugContract, setSlugContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleIsActive, setSaleIsActive] = useState(false)

  const [slugPrice, setSlugPrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {

    const slugContract = new web3.eth.Contract(ABI, ADDRESS)
    console.log(slugContract)
    setSlugContract(slugContract)

    const salebool = await slugContract.methods.saleIsActive().call()
    console.log("saleisActive" , salebool)
    setSaleIsActive(salebool)

    const totalSupply = await slugContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const slugPrice = await slugContract.methods.slugPrice().call() 
    console.log(slugPrice)
    setSlugPrice(slugPrice)
   
  }
  
  async function mintSluggies(how_many_sluggies) {
    if (slugContract) {
 
      const price = Number(slugPrice)  * how_many_sluggies 

      const gasAmount = await slugContract.methods.mintSluggies(how_many_sluggies).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      slugContract.methods
            .mintSluggies(how_many_sluggies)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  



  return (
    <div id="body" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Slug Club</title>
        <link rel="icon" href="/images/slugclub.png" />

        <meta property="og:title" content="The Slug Club" key="ogtitle" />
        <meta property="og:description" content="There are 40,000 species of gastropods on earth, but here in The Slug Club we have 10,000 exotic Sluggies for you to collect! Our 3 person team has personally cared for these creatures and are looking forward to them going to good homes!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://slugclubnft.com/" key="ogurl"/>
        <meta property="og:image" content="https://slugclubnft.com/images/slugclub.png" key="ogimage"/>
        <meta property="og:site_name" content="https://slugclubnft.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="SlugclubNFT" key="twdomain" />
        <meta property="twitter:url" content="https://twitter.com/SlugclubNFT" key="twurl" />
        <meta name="twitter:title" content="The Slug Club" key="twtitle" />
        <meta name="twitter:description" content="There are 40,000 species of gastropods on earth, but here in The Slug Club we have 10,000 exotic Sluggies for you to collect! Our 3 person team has personally cared for these creatures and are looking forward to them going to good homes!" key="twdesc" />
        <meta name="twitter:image" content="https://slugclubnft.com/images/slugclub.png" key="twimage" />
        <script src="https://kit.fontawesome.com/5f93ca0689.js" crossorigin="anonymous"></script>
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/slugclub.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around ">
              <a href="/#about" className="text-4xl text-black hover:text-gray-500 m-6">About</a>
              <a href="/mint" className="text-4xl text-black hover:text-gray-500 m-6">Mint!</a>
              <a href="/#team" className="text-4xl text-black hover:text-gray-500 m-6">Team</a>
              <a href="https://linktr.ee/slugclubnft" className="text-4xl  hover:text-gray-500 m-6 text-green-700">Social Media</a>
            </nav>
             
          </div>
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-gray-500 py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-gray-500 py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex amatic text-5xl text-black items-center bg-grey-lighter rounded rounded-r-none my-4 ">Total Sluggies Minted:  <span className="text-green-700 text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 10000</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex amatic text-5xl text-black items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">Give Me</span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      value={how_many_slugs}
                                      onChange={ e => set_how_many_slugs(e.target.value) }
                                      name="" 
                                      className=" pl-4 text-4xl amatic inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex amatic text-5xl text-black items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">Sluggies!</span>
    
                </div>
                {saleIsActive ? 
                <button onClick={() => mintSluggies(how_many_slugs)} className="mt-4 amatic text-4xl border-6 bg-green-700 bg-opacity-75  text-white hover:text-green-400 p-2 ">Mint {how_many_slugs} sluggies for {(slugPrice * how_many_slugs) / (10 ** 18)} ETH + GAS</button>        
                  : <button className="mt-4 amatic text-4xl border-6 bg-green-700 bg-opacity-75  text-white hover:text-green-400 p-2 ">Sale is not active or no wallet is connected</button>        
            
              }

              <p className="flex text-base text-black items-center">If using a mobile device follow these steps for purchasing: go into the metamask app, choose the menu options, you'll see an option called browser select that, navigate to our site and purchase.</p>
              <a href = "mailto:taylormadenft@gmail.com?subject = Sluggie Support&body = Support Message"><i class="fad fa-envelope-open-text fa-lg">Request Support</i></a>
                
            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }
