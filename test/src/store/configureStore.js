import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

export default function confifureStore(initialState){
    return createStore(rootReducer,initialState) // creates and returns a store with rootReducer and initalState
}