import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './containers/Home/'
import About from './containers/About/'
import Contact from './containers/Contact/'

const View = ({ component: MainComponent, path, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <Navbar />
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
              <View path="/" component={Home} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
