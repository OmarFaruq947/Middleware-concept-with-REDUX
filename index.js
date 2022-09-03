const { createStore, applyMiddleware } = require("redux");
const {
    delayActionMiddleware,
  
} = require("./middlewares");



// initial state (step 1)
const initialState = {
    todos: [],
};



// reducer (step-2)
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                    },
                ],
            };

        case "todos/todoLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload],
            };

        default:
            state;
    }
};



// store (step-3)
const store = createStore(
    todoReducer,
    applyMiddleware(delayActionMiddleware)
);


// subscribe to state changes (step -4)
store.subscribe(() => {
    console.log(store.getState()); // latest state paua jay 
});





// disptach actions
store.dispatch({
    type: "todos/todoAdded",
    payload: "Learn Redux from LWS",
});



