import { connect } from 'react-redux'

import BodyWrapper from '../components/BodyWrapper'

const mapStateToProps = ({currentMenu, currentSubMenu}) => ({
  currentMenu,
  currentSubMenu
})

export default connect(mapStateToProps)(BodyWrapper)
