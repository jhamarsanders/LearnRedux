var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHANGE_SEARCH':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());
store.dispatch({
    type: 'CHANGE_SEARCH',
    searchText: 'checking'
});
console.log('currentState', store.getState());

