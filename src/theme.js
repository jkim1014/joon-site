import { load } from 'webfontloader'

load({
  google: {
    families: ['Chivo', 'Open Sans']
  },
  typekit: {
    id: 'jan0inu'
  }
})
const theme = {
  breakpoints: {
    medium: {
      floor: '1330px', // For use with max-width
      ceiling: '1331px' // For use with min-width
    },
    small: {
      floor: '900px',
      ceiling: '901px'
    },
    mobile: {
      floor: '800px',
      ceiling: '800px'
    }
  },
  colors: {
    primary: '#ffffff', // white
    secondary: '#000000', // black
    tertiary: '#92b4f2', // cream blue
    quaternary: '#aaaaaa', // dark grey
    footer: '#4d85ea', // dark blue
    fontPrimary: '#ffffff',
    fontSecondary: '#000000',
    fontTertiary: '#1f66e5', // darker blue
    fontHeader: '#ffffff' // coral
  },
  fonts: {
    header: {
      family: 'Chivo',
      weight: 'bold'
    },
    navLink: {
      family: 'Chivo',
      weight: 'regular'
    },
    title: {
      family: 'Chivo',
      weight: 'regular'
    },
    content: {
      family: 'Open Sans Light',
      weight: 'light'
    }
  }
}
export default theme
