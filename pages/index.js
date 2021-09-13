import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Boring Bananas Company</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="The Slug Club." key="ogtitle" />
        <meta property="og:description" content="The Slug Club is brought to you by a brother and sister out of the US. We create sluggies, crypto creatures that worm their way through the crypto space." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://boringbananas.co/" key="ogurl"/>
        <meta property="og:image" content="https://boringbananas.co/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://boringbananas.co/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
        <meta property="twitter:url" content="https://boringbananas.co/" key="twurl" />
        <meta name="twitter:title" content="Boring Bananas Co." key="twtitle" />
        <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="twdesc" />
        <meta name="twitter:image" content="https://boringbananas.co/images/Hola.gif" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/Hola.gif" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around">
              <a href="#about" className="text-4xl text-black hover:text-gray m-6">About</a>
              <a href="/mint" className="text-4xl text-black hover:text-gray m-6">MINT!</a>
              <a href="#team" className="text-4xl text-black hover:text-gray m-6">Team</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl text-black ">EVERYONE, meet <br/><span className="text-green-700">sluggies</span></h1>
                    <p className="text-2xl text-black my-6">Here at <span className="text-5xl">The</span> <span className="text-green-700 text-5xl">Slug</span> <span className="text-5xl">Club</span>, we specialize in the world's <span className="text-span-2 font-bold">finest digital slugs</span>.<br />‍<br />We&#x27;re a brother and sister team, bringing you all the most <br/>‍<span className="text-green-700 text-5xl">Outrageous </span><span className="text-5xl ">and</span><span className="text-green-700 text-5xl "> Hilarious</span> <br/>slugs out there.
                    </p>
                    <p className="text-2xl text-black my-6">
                    <strong>LAUNCH DATE:</strong> 30 September 2021. 2pm EST. <br />‍
                    <span className="text-black black-2xl"><strong>TOTAL SUPPLY: 5500</strong> Sluggies.<br/><strong>PRICE: 0.025 ETH </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>

                  </div>
                  <img src="images/Traits4.gif" alt="" width="400px" className="feature-image"/>
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 text-4xl border-6 bg-green-900  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>
                
                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-green-900 text-7xl text-center">SIGNATURE SLUGGIES</h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/gallery1.jpeg" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/gallery2.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery3.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery4.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery5.jpeg" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center text-green-700 my-4">SLUG CLUB TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/Vee.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center text-green-700">KAT</h3>
                  </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/MJ.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center text-green-700">BEE</h3>
                </div>
                <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/MJ.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center text-green-700">RIA</h3>
                </div>
              </div>   
          </div>  
        </div>
    </div>  
    )
  }
