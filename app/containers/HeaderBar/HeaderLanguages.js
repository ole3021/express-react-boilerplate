import { connect } from 'react-redux'

import HeaderLanguages from '../../components/HeaderBar/HeaderLanguages'

const mapStateToProps = ({languages}) => ({
  languages
})

export default connect(mapStateToProps)(HeaderLanguages)
