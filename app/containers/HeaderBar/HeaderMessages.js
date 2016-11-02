import { connect } from 'react-redux'

import HeaderMessages from '../../components/HeaderBar/HeaderMessages'

const mapStateToProps = ({messages}) => ({
  messages
})

export default connect(mapStateToProps)(HeaderMessages)
