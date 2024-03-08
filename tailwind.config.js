/** @type {import('tailwindcss').Config} */


module.exports = {

  content: ['./src/views/**/*.hbs',
  "./node_modules/tw-elements/dist/js/**/*.js",
  "./node_modules/flowbite/**/*.js"
],


  theme: {
    extend: {
      fontFamily:{
        'Roboto':['Roboto', 'sans-serif'],
      },
      padding:{ 
        '100px':'30rem',
        '400px':'400px',
        '12rem': '12.6rem'
      },
      width:{
        '690px': '690px',
        '606px':'606px',
        '50rem' :'50rem',
        '340px':'340px',
        '1230px':'1230px',
        '1920px': '1920px'
      },
      height:{
        '37rem':'37rem',
        '384px':'384px',
        '1080px': '1080px'
      },
      colors:{
        'CH':'#9F263A',
        'GR':'#e0bec4',
        'TX':'#b06475',
        'WH':'#e8d0d4'
      },
      margin:{
        '87px':'87px'
      }
    },
  },
  plugins: [require('preline/plugin'),
  require('flowbite/plugin')],
  
}

