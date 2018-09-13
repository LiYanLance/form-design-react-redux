import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import ItemAdder from "../../item_adder"
import "../index.css"

class FormEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    render() {
        const {items, onDeleteItem} = this.props
        return (
            <div className="form-editor">
                <div>
                    <Link to="/preview">
                        <Button className="form-editor-header-btn" bsStyle="primary">PREVIEW</Button>
                    </Link>
                    <Button className="form-editor-header-btn" bsStyle="primary"
                            onClick={() => this.showAddItemModal()}>ADD</Button>
                </div>
                {
                    items.map(item => {
                        return (
                            <div key={item.id}>
                                {this.getRightElementByItemType(item)}
                                <div className="form-editor-delete-btn">
                                    <Button bsStyle="primary" bsSize="small"
                                            onClick={() => onDeleteItem(item.id)}>X</Button>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    this.state.show ? <ItemAdder closeModal={() => this.closeAddItemModal()}/> : null
                }
            </div>
        )
    }

    getRightElementByItemType(item) {
        return item.type === "Text Input"
            ? <input type="text" defaultValue={item.content} onKeyUp={(event) => this.onUpdate(event, item)}/>
            : <input type="date" defaultValue={item.content} onChange={(event) => this.onUpdate(event, item)}/>
    }

    showAddItemModal() {
        this.setState({show: true});
    }

    closeAddItemModal() {
        this.setState({show: false});
    }
}

export default FormEditor;