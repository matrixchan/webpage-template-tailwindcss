module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      sm:'576px',
      md: '768px',
      lg: '992px',
      xl: '1280px'
    },
    container:{
      center:true,
      padding:'1rem',
    },
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        roboto:"'Roboto', sans-serif"
      },
      colors:{
        'primary': '#336699',
        'header-divider':'#ccc',
        'header-mid-bg':'#fff',
        'header-bottom-bg':'#f1f1f1',
      }
    },
  },
  variants: {
    extend: {
      display:['group-hover'],
      visibility:['group-hover']
    },
  },
  plugins: [],
}
