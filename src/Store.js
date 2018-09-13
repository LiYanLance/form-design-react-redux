import { createStore} from "redux"

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item];
            break;
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.item.id);
        default:
            return state;
    }
}

const defaultItems = [
    {id: 1, type:"Text Input"},
    {id: 2, type:"Text Input"},
    {id: 3, type:"Date Picker"},
    {id: 4, type:"Date Picker"},
    {id: 5, type:"Text Input"},
]

const store = createStore(reducer, defaultItems);

export default store;