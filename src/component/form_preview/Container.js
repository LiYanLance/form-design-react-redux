import {connect} from "react-redux"
import View from "./component/View";

const mapStateToProps = (items) => ({items})

export default connect(
    mapStateToProps
)(View)