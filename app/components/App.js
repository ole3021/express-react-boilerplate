import React from 'react'

import HeaderBar from './HeaderBar'
import SideBar from '../containers/SideBar'
import BodyWrapper from '../containers/BodyWrapper'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div>
        <HeaderBar />
        <SideBar />
        <BodyWrapper>
          {this.props.children}
        </BodyWrapper>
        <Footer />
      </div>
    )
  }
}

export default App
