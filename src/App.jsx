import React from 'react'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import MiddleOne from './components/middleOne/middleOne.jsx'
import Product from './components/product/product.jsx'
import Footer from './components/footer/footer.jsx'
import Contribution from './components/contribution/contribution.jsx'

class App extends React.Component {

  render() {
    return (
      <>
        <Home />
        <About />
        <MiddleOne />
        <Product />
        <Footer />
        <Contribution />
      </>
    )

  }
}

export default App
