import React from 'react'

class SmallBox extends React.Component {
  render () {
    return (
      <div className='small-box bg-green'>
        <div className='inner'>
          <h3>53<sup style={{fontSize: 20 + 'px'}}>%</sup></h3>
          <p>
            Bounce Rate
          </p>
        </div>
        <div className='icon'>
          <i className='fa fa-dashboard' />
        </div>
        <a href='#' className='small-box-footer'>More info <i className='fa fa-arrow-circle-right' /></a>
      </div>
    )
  }
}

export default SmallBox
