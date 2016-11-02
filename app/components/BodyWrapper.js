import React from 'react'

class BodyWrapper extends React.Component {
  render () {
    const props = this.props

    return (
      <div className='content-wrapper'>
        <div className='content body'>
          <section className='content-header'>
            <h1>
              {props.currentSubMenu ? props.currentSubMenu.title : props.currentMenu.title}
              <small>{props.currentSubMenu ? props.currentSubMenu.subTitle : props.currentMenu.subTitle}</small>
            </h1>
            <ol className='breadcrumb'>
              <li><a><i className='fa fa-dashboard' /> Home</a></li>
              <li><a>{props.currentMenu.name}</a></li>
              {props.currentSubMenu ? <li className='active'>{ props.currentSubMenu.name }</li> : ''}
            </ol>
          </section>
          <section className='content-header'>
            {this.props.children}
          </section>
        </div>
      </div>
    )
  }
}

export default BodyWrapper
