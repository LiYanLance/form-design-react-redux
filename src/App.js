import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import store from "./Store"
import ItemPreview from "./component/form_preview"
import ItemEditor from "./component/form_editor"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={ItemEditor}/>
                        <Route path="/preview" component={ItemPreview}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
