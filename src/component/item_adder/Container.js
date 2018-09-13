import {connect} from "react-redux"
import View from "./component/View";

const mapStateToProps = (items) => ({items})

const mapDispatchToProps = dispatch => ({
    onAddItem: item => dispatch({type:"ADD_ITEM", item}),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View)



