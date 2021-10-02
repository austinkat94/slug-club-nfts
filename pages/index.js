import Head from 'next/head'

export default function Home() {

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
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/" className=""><img src="images/slugclub.png" width="108" alt="" className="logo-image" /></a>
          <nav className="flex flex-wrap flex-row justify-around">
            <a href="#about" className="text-4xl text-black hover:text-gray-500 m-6">About</a>
            <a href="/mint" className="text-4xl text-black hover:text-gray-500 m-6">Mint!</a>
            <a href="#team" className="text-4xl text-black hover:text-gray-500 m-6">Team</a>
            <a href="https://linktr.ee/slugclubnft" className="text-4xl  hover:text-gray-500 m-6 text-green-700">Social Media</a>
          </nav>
        </div>
      </div>

      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
            <div className="lg:w-1/2 w-3/4">
              <h1 className="text-7xl text-black amatic">Everyone, meet <br/><span className="text-green-700">sluggies</span></h1>
              <p className="text-2xl text-black my-6">There are 40,000 species of gastropods on earth, but here in The Slug Club we have 10,000 exotic Sluggies for you to collect! <br /> Our 3 person team has personally cared for these creatures and are looking forward to them going to good homes!
              </p>
              <p className="text-2xl text-black my-6">
              <strong>LAUNCH DATE:</strong> September 28th 11:59 PM EST<br />
              <span className="text-black black-2xl"><strong>Total Supply: 10000</strong> Sluggies.<br/><strong>Price: 0.04 ETH </strong>each.</span><br/><strong>Purchase Limit: 10 </strong> Sluggies</p>
            </div>
            <img src="images/sluggies.gif" alt="" width="400px" className="feature-image"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <a href="/mint" className="mt-4 text-4xl amatic border-6 bg-green-700 bg-opacity-75  text-white hover:text-green-400 p-2 ">Go To Minting Page!</a> 
        </div> 
      </div>

      <br/>

      <div className="flex flex-col rounded-md shadow bg-yellow-100 bg-opacity-75">
        <h2 className="text-7xl amatic text-center text-green-700 my-4">Roadmap</h2>
        <div id="roadmap" className="flex grid grid-cols-3">
          <div className="col-span-3 xl:col-span-2">
            <img src="/images/Roadmap.png"/>
          </div>
          <div className="col-span-3 xl:col-span-1">
            <div class="grid grid-rows-5 justify-center place-self-center">
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">Launch</h3>
                <ul class="list-disc list-inside pl-4">
                  <li className="line-through">Random community giveaway</li>
                  <li>Social media raffle for a free sluggie</li>
                  <li>Random buyer gets free sluggie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">25% Sold</h3>
                <ul class="list-disc list-inside pl-4">
                  <li>Random member with under 9 or less gets free sluggie</li>
                  <li>Member drawing for a chance at 3 spots to win 2 ETH each</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">50% Sold</h3>
                <ul class="list-disc list-inside pl-4">
                  <li>Donate 10 ETH to <a className="underline" href="https://girlswhocode.com/">Girls Who Code</a></li>
                  <li>Donate 10 ETH to TBA</li>
                  <li>Donate 10 ETH to TBA</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">75% Sold</h3>
                <ul class="list-disc list-inside pl-4">
                  <li>Community drawing for a chance at 3 spots to win 5 ETH each</li>
                  <li>Community drawing for a chance at 20 spots to win a free sluggie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">100% Sold</h3>
                <ul class="list-disc list-inside pl-4">
                  <li>Members only area announced</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
              
      <div id="team" className="mx-12 my-16 ">
        <h2 className="text-7xl amatic text-center text-green-700 my-4">Slug Club Team</h2>
        <div className="flex justify-around flex-wrap">
          <div className="flex flex-col  my-6" style={{width:"360px"}}>
            <div className="cards-image-mask"><img src="/images/kat.png" width="360px" alt="" className="cards-image" /></div>
            <h3 className="my-4 text-center text-5xl amatic text-center text-green-700">KAT</h3>
          </div>
          <div className="flex flex-col  my-6" style={{width:"360px"}}>
              <div className="cards-image-mask"><img src="/images/bee.png" width="360px" alt="" className="cards-image" /></div>
              <h3 className="my-4 text-center text-5xl amatic text-center text-green-700">BEE</h3>
          </div>
          <div className="flex flex-col  my-6" style={{width:"360px"}}>
              <div className="cards-image-mask"><img src="/images/ria.png" width="360px" alt="" className="cards-image" /></div>
              <h3 className="my-4 text-center text-5xl amatic text-center text-green-700">RIA</h3>
          </div>
        </div>
      </div> 
    </div>  
    )
  }
