module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundImage: theme => ({
        'banana': "url('/images/BG2.jpg')",
       })

    },
  },
  plugins: [],
  rinkeby:{
    host: "localhost",
    provider: function() {
      return new HDWalletProvider( "spawn more suspect notable road solar window consider purity tomato smile jacket", "https://rinkeby.infura.io/v3/9e8464fa68004511ad27565fcc24ecb7");
    },
    network_id:4
    , gas : 6700000
    , gasPrice : 10000000000
  }
}
