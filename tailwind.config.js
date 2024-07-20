/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
       sm: '480px',
       md: '768px',
       lg: '976px',
       sxl: '1200px',
       xl: '1440px',
    },
    extend: {
      colors: {
        'cosWhite': "#F8F8F8",
        'cosBlue': "#028DDB",
        'textWhite': "#FFFFFF",
        'bgColor': "#04427B",
        'cosBorder': "#FFCCF4",
        'cosInputText': "#B2AEAE",
        'resultBtn': "#FF59BD",
        'optionsColor': "#6C6B6C",
        'slitePlink': "#E0F4FF",
        'borderBottom1': "#FFC3F2",
        'borderBottom2': "#9CDBFF",
        'borderBottom3': "#E9ACFF",
        'borderBottom4': "#FF6D6D",
        'testiFont':     "#212121",
        'starColor':     "#FF9900",
        'greenColor': "#008000",
        'hoverBtnColor': {
          '75': 'rgba(rgba(2, 141, 219, 1)',
        },
        
        'bgTestimonials': {
         DEFAULT: "#04427B",
         '65': 'rgba(4, 58, 123, 0.65)',
      },
        'footerBg': "#E8E8E8"
        
      }
    },
   
  },
  plugins: [],
}