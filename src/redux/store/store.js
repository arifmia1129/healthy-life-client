import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import blogReducer from "../reducer/blogReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(blogReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;