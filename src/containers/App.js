import React, { Component } from 'react'
import Main from '../components/Main/index'
import ProductsContainer from '../components/ProductsContainer/index'
import SideMenu from '../components/SideMenu/index'
import Footer from '../components/Footer/index'
import Header from '../components/Header/index'
// import Phone from '../components/Phone/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <ProductsContainer />
        <SideMenu />
        {/* <Phone /> */}
        <Footer />
      </div>
    )
  }
}

export default App
