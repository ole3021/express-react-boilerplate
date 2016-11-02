import { connect } from 'react-redux'

import HeaderNotifications from '../../components/HeaderBar/HeaderNotifications'

const mapStateToProps = ({notifications}) => ({
  notifications
})

export default connect(mapStateToProps)(HeaderNotifications)
