import React from 'react'

class HeaderLanguages extends React.Component {
  render () {
    let props = this.props

    const languageList = props.languages.map(function (language, iterator) {
      return (
        <li role='presentation' key={language.key}>
          <a role='menuitem' href='#'>{language.name}</a>
        </li>
      )
    })

    return (
      <li className='dropdown notifications-menu'>
        <a href='#' className='dropdown-toggle' data-toggle='dropdown'><i className='fa fa-language' /></a>
        <ul className='dropdown-menu'>
          <li>
            <div className='slimScrollDiv'>
              <ul className='menu'>
                {languageList}
              </ul>
              <div className='slimScrollBar' />
              <div className='slimScrollRail' />
            </div>
          </li>
        </ul>
      </li>
    )
  }
}

export default HeaderLanguages
