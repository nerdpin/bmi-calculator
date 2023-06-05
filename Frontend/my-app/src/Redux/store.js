import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import authReducer from "./AuthReducer/auth.Reducer";
import bmiReducer from "./BMI/bmi.reducer";
const store =legacy_createStore(combineReducers({
    authReducer,bmiReducer
     
}),compose(applyMiddleware(thunk)))

export default store;