import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

function reducer(state={
    title: "道路阻断",
    totalBlockNum: 0,
    currentPage:"/",
    currentLevel:1
},action){
    switch (action.type){
        case "GET_DATA":
            return {...state}
        case "GET_DATA_SUCCESS":
            return {
            ...state,
            totalBlockNum: action.payload.blockCount
        }
        case "GET_DATA_FAILED":
            return {
                ...state
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case "SET_CURRENT_LEVEL":
            return {
                ...state,
                currentLevel: action.payload.currentLevel
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));




export {store}