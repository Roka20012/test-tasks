import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
