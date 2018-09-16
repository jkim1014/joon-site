import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Footer from './components/Footer'
import Home from './containers/Home/'
import About from './containers/About/'
import Contact from './containers/Contact/'
import PineapplePair from './containers/Project/containers/PineapplePair'
import HouseGrilles from './containers/Project/containers/HouseGrilles'
import HsaTime from './containers/Project/containers/HsaTime'
import Joyfull from './containers/Project/containers/Joyfull'
import CrispyEuchre from './containers/Project/containers/CrispyEuchre'
import AnnenbergHelper from './containers/Project/containers/AnnenbergHelper'

const View = ({ component: MainComponent, path, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <MainComponent {...props} />
        <Footer />
      </div>
    )}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <View path="/about" component={About} />
              <View path="/contact" component={Contact} />
              <View path="/project/pineapplepair" component={PineapplePair} />
              <View path="/project/housegrilles" component={HouseGrilles} />
              <View path="/project/hsatime" component={HsaTime} />
              <View path="/project/joyfull" component={Joyfull} />
              <View path="/project/crispyeuchre" component={CrispyEuchre} />
              <View
                path="/project/annenberghelper"
                component={AnnenbergHelper}
              />
              <View path="/" component={Home} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
