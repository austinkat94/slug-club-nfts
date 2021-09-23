import Head from 'next/head'

const IPFS = require('ipfs')

async function main () {
  const node = await IPFS.create()
}

main()

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Slug Club</title>
        <link rel="icon" href="/images/slugclub.png" />

        <meta property="og:title" content="The Slug Club." key="ogtitle" />
        <meta property="og:description" content="The Slug Club is brought to you by a brother and sister out of the US. We create sluggies, crypto creatures that worm their way through the crypto space." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://slugclubnft.com/" key="ogurl"/>
        <meta property="og:image" content="https://slugclubnft.com/images/slugclub.png" key="ogimage"/>
        <meta property="og:site_name" content="https://slugclubnft.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="SlugclubNFT" key="twdomain" />
        <meta property="twitter:url" content="https://twitter.com/SlugclubNFT" key="twurl" />
        <meta name="twitter:title" content="The Slug Club" key="twtitle" />
        <meta name="twitter:description" content="The Slug Club is brought to you by a brother and sister out of the US. We create sluggies, crypto creatures that worm their way through the crypto space." key="twdesc" />
        <meta name="twitter:image" content="https://slugclubnft.com/images/slugclub.png" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/slugclub.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around">
              <a href="#about" className="text-4xl text-black hover:text-gray-500 m-6">About</a>
              <a href="/mint" className="text-4xl text-black hover:text-gray-500 m-6">Mint!</a>
              <a href="#team" className="text-4xl text-black hover:text-gray-500 m-6">Team</a>
              <a href="https://twitter.com/SlugclubNFT" className="text-4xl  hover:text-gray-500 m-6 text-green-700">Twitter</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl text-black Poppitandfinchsans">Everyone, meet <br/><span className="text-green-700">sluggies</span></h1>
                    <p className="text-2xl text-black my-6">Here at The Slug Club, we specialize in the world's finest digital slugs.<br /><br />We are a crew of 3, bringing you the most Outrageous and Hilarious slugs out there.
                    </p>
                    <p className="text-2xl text-black my-6">
                    <strong>LAUNCH DATE:</strong> 25 September 2021. Midnight EST. <br />
                    <span className="text-black black-2xl"><strong>Total Supply: 10000</strong> Sluggies.<br/><strong>Price: 0.04 ETH </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7zqaj1u/n5576/cf12/cm0/cu4/ct0/cs0/ca0/co1/cr0/ss0/cac000/cpc000/pct/tcfff/fs100/szw320/szh135/tatTime%20left%20to%20Event%20in/tac000/tptTime%20since%20Event%20started%20in/tpc000/iso2021-09-25T00:00:00" allowtransparency="true" frameborder="0" width="182" height="49"></iframe>
                  </div>
                  <img src="images/sluggies.gif" alt="" width="400px" className="feature-image"/>
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 text-4xl border-6 bg-green-900  text-white hover:text-green-400 p-2 ">Go To Minting Page!</a>
                
                
            </div> 
            </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center text-green-700 my-4">Slug Club Team</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/kat.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center text-green-700">KAT</h3>
                  </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                      <div className="cards-image-mask"><img src="/images/bee.png" width="360px" alt="" className="cards-image" /></div>
                      <h3 className="my-4 text-center text-5xl text-center text-green-700">BEE</h3>
                  </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                      <div className="cards-image-mask"><img src="/images/ria.png" width="360px" alt="" className="cards-image" /></div>
                      <h3 className="my-4 text-center text-5xl text-center text-green-700">RIA</h3>
                  </div>
              </div>   
          </div>  
        </div>
    </div>  
    )
  }
