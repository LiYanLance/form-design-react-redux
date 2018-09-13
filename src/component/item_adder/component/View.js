import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import "../index.css"

class ItemAdder extends Component {

    constructor(props) {
        super(props);
        this.state = {newType: "Text Input"};
    }

    render() {
        const {items, onAddItem, closeModal} = this.props

        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Select Field Type</Modal.Title>
                    </Modal.Header>

                    {/*<Modal.Body>*/}
                        <div className="modal-body" onChange={(event) => this.chooseType(event)}>
                            <input type="radio" name="type" value="Text Input" defaultChecked/>Text Input<br/>
                            <input type="radio" name="type" value="Date Picker"/>Date Picker<br/>
                        </div>
                    {/*</Modal.Body>*/}

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={() => {
                            onAddItem(this.getNewItem(items));
                            closeModal()
                        }}>Add</Button>
                        <Button onClick={() => closeModal()}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }

    chooseType(event) {
        this.setState({newType: event.target.value});
    }

    getNewItem(items) {
        const maxId = items.reduce((max, cur) => max > cur.id ? max : cur.id, 0);
        this.setState({show: false});
        return {id: maxId + 1, name: "", type: this.state.newType}
    }

}

export default ItemAdder;