import React from 'react'

class MessageItem extends React.Component {
  render () {
    return (
      <li>
        <a href='#'>
          <div className='pull-left'> <img src={this.props.displayPicture} className='img-circle' alt='User Image' /> </div>
          <h4>{this.props.title} <small><i className='fa fa-clock-o' /> {this.props.time}</small></h4>
          <p>
            {this.props.content} </p>
        </a>
      </li>
    )
  }
}

export default MessageItem
