import React, {Component} from "react"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import "../index.css"

export default class ItemPreview extends Component {

    render() {
        const {items} = this.props;
        return (
            <div className="form-preview">
                <Link to="/">
                    <Button className="form-preview-header-btn" bsStyle="primary">EDIT</Button>
                </Link>
                <div>
                    {
                        items.map(item =>
                            <div key={item.id}>
                                {
                                    item.type === "Text Input"
                                        ? <input className="list_item_content"/>
                                        : <input type="date"/>
                                }
                            </div>)

                    }
                </div>
            </div>
        )
    }


}