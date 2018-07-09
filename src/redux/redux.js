import {createStore} from 'redux';

function reducer(state={
    leftDisplay: "block",
    rightDisplay: "block",
    blockRankBoxDisplay: "none",
    title: "道路阻断"
},action){
    switch (action.type){
        case "showBlockRankBox":
            return {
                ...state,
                leftDisplay: "none",
                rightDisplay: "none",
                blockRankBoxDisplay: "block"
            }
        case "titleClick":
            return {
                ...state,
                leftDisplay: "block",
                rightDisplay: "block",
                blockRankBoxDisplay: "none"
            }
        default:
            return state;
    }
}

const store = createStore(reducer);




export {store}