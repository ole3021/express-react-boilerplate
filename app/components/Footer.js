import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer className='main-footer'>
        <div className='pull-right hidden-xs'>
          <b>Version</b> 0.1.0
        </div>
        <strong>Copyright © 2013-2016 <a href='http://www.mobilenowgroup.com/'>Mobile Now Group</a>.</strong> All rights
        reserved.
      </footer>
    )
  }
}

export default Footer
