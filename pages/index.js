import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js";

export default function Home() {

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

  const [number_of_sluggies, setBalanceOf] = useState(0)

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
    web3.eth.getAccounts().then((possible_accounts) => {console.log(possible_accounts); if(possible_accounts > 0){var wallet1 = possible_accounts[0];setWalletAddress(wallet1);setSignedIn(true);callContractData(wallet1);}else{
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
  }})
    
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

    const number_of_sluggies = await slugContract.methods.balanceOf(wallet).call() 
    console.log(number_of_sluggies)
    setBalanceOf(number_of_sluggies)
   
  }

  async function mintSluggies(how_many_sluggies) {
    if (slugContract) {

      try{
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
      }
      catch(e) {
        var timeElapsed = Date.now();
        var today = new Date(timeElapsed);
        var div = document.getElementById('error_log');

        div.innerHTML = today.toUTCString() + " - " + e.message;
      }
    } else {
        console.log("Wallet not connected")
    }
    
  };

  return (
    <div id="body" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Slug Club</title>
        <link rel="icon" href="/images/slugclub.png" />

        <meta property="og:title" content="The Slug Club." key="ogtitle" />
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
      </Head>

      <div>
        <nav class="bg-white bg-opacity-50 w-full rounded-md">
          <div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>

                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>

                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                  <img class="block  h-14 w-16 logo-image" src="/images/slugclub.png" logo-imagealt="slug club"/>
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="/#about" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium" aria-current="page">About</a>

                    <a href="/#roadmap" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Roadmap</a>

                    <a href="/#team" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Team</a>

                    <a href="https://discord.gg/K2y37ceT" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Discord</a>

                    <a href="https://opensea.io/collection/the-slug-club" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Opensea</a>

                    <a href="https://linktr.ee/slugclubnft" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Social Media</a>

                    {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-gray-500 py-2 px-4 mx-4 shadow-lg hover:bg-green-700 hover:text-gray-100 rounded-md">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-gray-500 py-2 px-4 mx-4 shadow-lg hover:bg-green-700 hover:text-gray-100 rounded-md">Wallet Connected: {walletAddress}</button>}

                    {number_of_sluggies > 0 & signedIn ? <a href={"SlugMembers/"+walletAddress+".js"} class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Got to Your Garden!</a>
                    : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="/#about" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About</a>

              <a href="/#roadmap" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>

              <a href="/#team" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

              <a href="https://discord.gg/K2y37ceT" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Discord</a>

              <a href="https://opensea.io/collection/the-slug-club" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Opensea</a>

              <a href="https://linktr.ee/slugclubnft" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Social Media</a>
              {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-gray-500 py-2 px-4 mx-4 shadow-lg hover:bg-green-700 hover:text-gray-100 rounded-md">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-gray-500 py-2 px-4 mx-4 shadow-lg hover:bg-green-700 hover:text-gray-100 rounded-md">Wallet Connected: {walletAddress}</button>}
            </div>
          </div>
        </nav>
      </div>

      <div className="md:w-2/3 w-4/5" id="about">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
            <div className="lg:w-1/2 w-3/4">
              <h1 className="text-7xl text-black amatic">Welcome to, <br/><span className="text-green-700">The Slug Club</span></h1>
              <p className="text-lg text-black my-6">There are 40,000 species of gastropods on earth, but here in The Slug Club we have 10,000 exotic Sluggies for you to collect! <br /><br/> Our 3 person team has personally cared for these creatures within the Ethereum Blockchain and are looking forward to them going to good homes!
              </p>
              <p className="text-lg text-black my-6">
              <strong>LAUNCH DATE:</strong> September 28th 11:59 PM EST<br />
              <span className="text-black black-lg"><strong>Total Supply: 10000</strong> Sluggies.<br/><strong>Price: 0.04 ETH </strong>each.</span><br/><strong>Purchase Limit: 10 </strong> Sluggies</p>
            </div>
            <img src="images/sluggies3.gif" alt="" width="400px" className="feature-image"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
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
                  <button onClick={() => mintSluggies(how_many_slugs)} className="mt-4 amatic text-4xl border-6 bg-green-700 bg-opacity-75 rounded-md text-white hover:text-green-400 p-2 ">Mint {how_many_slugs} sluggies for {(slugPrice * how_many_slugs) / (10 ** 18)} ETH + GAS</button>        
                    : <button className="mt-4 amatic text-4xl border-6 bg-green-700 bg-opacity-75 rounded-md text-white hover:text-green-400 p-2 ">Sale is not active or no wallet is connected</button>        
              
                }
                <br />

                <div id="error_log" className="md:w-2/3 w-4/5 rounded-md shadow bg-yellow-100 bg-opacity-75 text-red-600"></div>

                <span className="flex text-black amatic text-md">Please ensure your wallet has funds for the cost of the sluggies as well as gas fees, otherwise button won't load purchasing pop-up. Check console log if unsure.</span>               
              </div> 
            </div>
          </div>  
        </div> 
      </div>

      <br/>
      <br/>

      <div className="flex flex-col rounded-md shadow bg-yellow-100 bg-opacity-75 md:w-2/3 w-4/5" id="rarity">
        <h2 className="text-7xl amatic text-center text-green-700 my-4">Rarity</h2>
        <div className="flex grid grid-cols-3">
          <div className="w-3/4 items-center justify-self-center col-span-3">
            <p className="text-black text-lg my-6">
              Our Sluggies are programmatically generated utlizing the Python language and are living on the Ethereum blockchain. Our artist BEE has hand-drawn over 100 traits between shells, mouths, eyes, props and more! No 2 Sluggies exactly alike but each one has it's own uniqueness it brings to the Garden! There are also 8 individually unique one-of-a-kind Sluggies hidden throughout the bunch!
            </p>
          </div>
        </div>
      </div>

      <br/>
      <br/>

      <div className="flex flex-col rounded-md shadow bg-yellow-100 bg-opacity-75 md:w-2/3 w-4/5" id="roadmap">
        <h2 className="text-7xl amatic text-center text-green-700 my-4">Roadmap</h2>
        <div className="flex grid grid-cols-3">
          <div className="w-3/4 items-center justify-self-center col-span-3">
            <p className="text-black text-lg my-6">
            Why collect a Sluggie? 
            <br/>
            <br/>
            Well besides how adorably goofy and nerdy they are,

            they'll contribute to making their community a better place! 
            
            <br/>
            <br/>
            
            Our goal is to donate <span class="font-bold">over 50 ETH tokens</span> to our members and foundations, before minting is over! AND 100% of royalties will be 100% for members through monthly "garden fertilizing"!

            <br/>
            <br/>

            Invest in a collection that will invest in their collectors!

            <br/> 
            <br/>

            From free Sluggie drops, member drawings for ETH, member Slug Garden NFT giveaway, to donations to various charities and more!

            <br/>
            <br/>

            Sluggies may be small but they’re looking to make a <span class="font-bold">BIG</span> impact!
            </p>
          </div>
          <div className="col-span-3 ">
            <img src="/images/Roadmap.png"/>
          </div>
          <br/>
          <div className="col-span-3">
            <div class="grid grid-rows-5 place-self-center">
              <div className=" w-1/2 place-self-center">
                <h3 className="text-4xl amatic text-center text-green-700 my-4">Launch Free Giveaways</h3>
                <div className="grid grid-cols-1 place-items-center">
                  <ul class="w-3/4 list-disc list-outside pl-4 text-md">
                    <li className="line-through">Random community giveaway</li>
                    <li className="line-through">Social media raffle for a free Sluggie</li>
                    <li>Next Minter gets free Sluggie</li>
                    <li>Private Slug CLub Members Discord opened</li>
                  </ul>
                </div>
              </div>
              <div className=" w-1/2 place-self-center">
                <h3 className="text-4xl amatic text-center text-green-700 my-4">25% Member Giveaways</h3>
                <div className="grid grid-cols-1 place-items-center">
                  <ul class="w-3/4 list-disc list-outside pl-4 text-md">
                    <li>Member drawing for free Sluggie</li>
                    <li>Member drawing for a chance at 5 spots to win 2 ETH each</li>
                    <li>Free 3D printed Sluggie for first members!</li>
                  </ul>
                </div>
              </div>
              <div className=" w-1/2 place-self-center">
                <h3 className="text-4xl amatic text-center text-green-700 my-4">50% Charity Donations</h3>
                <div className="grid grid-cols-1 place-items-center">
                <ul class="w-3/4 list-disc list-outside pl-4 text-md">
                  <li>Donate 10 ETH to <a className="underline" href="https://girlswhocode.com/">Girls Who Code</a></li>
                  <li>Donate 10 ETH to <a className="underline" href="https://paulwalkerfoundation.org/pages/about-us">Paul Walker Foundation</a></li>
                </ul>
                </div>
              </div>
              <div className=" w-1/2 place-self-center">
                <h3 className="text-4xl amatic text-center text-green-700 my-4">60% Slug Garden NFTs opened & The Shed is open!</h3>
                <div className="grid grid-cols-1 place-items-center">
                  <ul class="w-3/4 list-disc list-outside pl-4 text-md">
                    <li>Members recieve uniquely generated Slug Garden NFTs</li>
                    <li>The Shed is open in The Garden! We envision our Garden to be a place for our members to interact with one another while winning various prizes. While the Garden is being worked on, The Shed is open for business! This is our members only merchandise shop!</li>
                  </ul>
                </div>
              </div>
              <div className=" w-1/2 place-self-center">
                <h3 className="text-4xl amatic text-center text-green-700 my-4">75% Member giveaways & Slug Club Garden is funded!</h3>
                <div className="grid grid-cols-1 place-items-center">
                  <ul class="w-3/4 list-disc list-outside pl-4 text-md">
                    <li>Members drawing for a chance at 5 spots to win 5 ETH each</li>
                    <li>Members drawing for a chance at 10 spots to win 2 ETH each</li>
                    <li>Members drawing for a chance at 20 spots to win 1 ETH each</li>
                    <li>Funding our Slug Club Garden for our members events and more!</li>
                  </ul>
                </div>
              </div>
              <div className=" w-1/2 place-self-center">
                <h3 className="text-4xl amatic text-center text-green-700 my-4">100% The Garden is open!</h3>
                <div className=" w-3/4 grid grid-cols-1 place-items-center">
                  <ul class="w-3/4 list-disc list-outside pl-4 text-md">
                    <li>The Garden is opened! We envision an open garden for our Sluggies to roam around and interact with one another, win various prizes and more! <br/>
                    STAY TUNED!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              
      <div id="team" className="mx-12 my-16 ">
        <h2 className="text-7xl amatic text-center text-green-700 my-4">Slug Club Team</h2>
        <div className="flex justify-around flex-wrap">
          <a href="https://twitter.com/colbreezekat">
            <div className="flex flex-col  my-6" style={{width:"360px"}}>
              <div className="cards-image-mask"><img src="/images/kat.png" width="360px" alt="" className="cards-image" /></div>
              <h3 className="my-4 text-center text-5xl amatic text-center text-green-700">KAT</h3>
            </div>
          </a>
          <a href="https://twitter.com/beethesluggie">
            <div className="flex flex-col  my-6" style={{width:"360px"}}>
                <div className="cards-image-mask"><img src="/images/bee.png" width="360px" alt="" className="cards-image" /></div>
                <h3 className="my-4 text-center text-5xl amatic text-center text-green-700">BEE</h3>
            </div>
          </a>
          <a href="https://twitter.com/riathesluggie">
            <div className="flex flex-col  my-6" style={{width:"360px"}}>
                <div className="cards-image-mask"><img src="/images/ria.png" width="360px" alt="" className="cards-image" /></div>
                <h3 className="my-4 text-center text-5xl amatic text-center text-green-700">RIA</h3>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href = "mailto:taylormadenft@gmail.com?subject = SluggieSupport&body = SupportMessage" className="button amatic text-4xl position-self-center rounded-md hover:text-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>Request Support</a>
                </div>
      </div> 
    </div>  
    )
  }
