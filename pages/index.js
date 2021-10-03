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

                    <a href="/mint" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Mint!</a>

                    <a href="/#roadmap" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Roadmap</a>

                    <a href="/#team" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Team</a>

                    <a href="https://linktr.ee/slugclubnft" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Social Media</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="/#about" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About</a>

              <a href="/mint" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mint!</a>

              <a href="/#roadmap" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>

              <a href="/#team" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

              <a href="https://linktr.ee/slugclubnft" class="text-black-300 hover:bg-green-700 hover:bg-opacity-75 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Social Media</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="md:w-2/3 w-4/5" id="about">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
            <div className="lg:w-1/2 w-3/4">
              <h1 className="text-7xl text-black amatic">Everyone, meet <br/><span className="text-green-700">sluggies</span></h1>
              <p className="text-lg text-black my-6">There are 40,000 species of gastropods on earth, but here in The Slug Club we have 10,000 exotic Sluggies for you to collect! <br /><br/> Our 3 person team has personally cared for these creatures and are looking forward to them going to good homes!
              </p>
              <p className="text-lg text-black my-6">
              <strong>LAUNCH DATE:</strong> September 28th 11:59 PM EST<br />
              <span className="text-black black-lg"><strong>Total Supply: 10000</strong> Sluggies.<br/><strong>Price: 0.04 ETH </strong>each.</span><br/><strong>Purchase Limit: 10 </strong> Sluggies</p>
            </div>
            <img src="images/sluggies3.gif" alt="" width="400px" className="feature-image"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <a href="/mint" className="mt-4 text-4xl amatic border-6 bg-green-700 bg-opacity-75 rounded-md text-white hover:text-green-400 p-2 ">Go To Minting Page!</a> 
        </div> 
      </div>

      <br/>
      <br/>

      <div className="flex flex-col rounded-md shadow bg-yellow-100 bg-opacity-75 md:w-2/3 w-4/5" id="roadmap">
        <h2 className="text-7xl amatic text-center text-green-700 my-4">Roadmap</h2>
        <div id="roadmap" className="flex grid grid-cols-3">
          <div className="w-3/4 items-center justify-self-center col-span-3">
            <p className="text-black text-lg my-6">
            Why collect a Sluggie? 
            <br/>
            <br/>
            Well besides how adorably goofy and nerdy they are,

            they'll contribute to making their community a better place! 
            
            <br/>
            <br/>
            
            Our goal is to donate <span class="font-bold">over 50 ETH tokens</span> to the community and foundations, making us one of the largest donators from the NFT bunch!

            <br/>
            <br/>

            Invest in a collection that will invest in their collectors!

            <br/> 
            <br/>

            From free Sluggie drops to community drawings for ETH,

            along with donations to various charities!

            <br/>
            <br/>

            Sluggies may be small but they’re looking to make a <span class="font-bold">BIG</span> impact! 
            </p>
          </div>
          <div className="col-span-3 xl:col-span-2">
            <img src="/images/Roadmap.png"/>
          </div>
          <div className="col-span-3 xl:col-span-1">
            <div class="grid grid-rows-5 justify-center place-self-center">
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">Launch</h3>
                <ul class="list-disc list-inside pl-4 text-sm">
                  <li className="line-through">Random community giveaway</li>
                  <li>Social media raffle for a free sluggie</li>
                  <li>Random buyer gets free sluggie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">25% Sold</h3>
                <ul class="list-disc list-inside pl-4 text-sm">
                  <li>Random member with under 9 or less gets free sluggie</li>
                  <li>Member drawing for a chance at 3 spots to win 2 ETH each</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">50% Sold</h3>
                <ul class="list-disc list-inside pl-4 text-sm">
                  <li>Donate 10 ETH to <a className="underline" href="https://girlswhocode.com/">Girls Who Code</a></li>
                  <li>Donate 10 ETH to TBA</li>
                  <li>Donate 10 ETH to TBA</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">75% Sold</h3>
                <ul class="list-disc list-inside pl-4 text-sm">
                  <li>Community drawing for a chance at 3 spots to win 5 ETH each</li>
                  <li>Community drawing for a chance at 10 spots to win a free sluggie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl amatic text-center text-green-700 my-4">100% Sold</h3>
                <ul class="list-disc list-inside pl-4 text-sm">
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
