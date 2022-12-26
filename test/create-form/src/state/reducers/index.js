import { combineReducers } from "redux";
import form_reducer from "./form_reducer";

const reducers = combineReducers({
    Form_Data: form_reducer
})

export default reducers;