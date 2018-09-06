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
