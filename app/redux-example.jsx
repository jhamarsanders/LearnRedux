var redux = require('redux');
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('Starting redux example');


//Subscribe to changes
store.subscribe(() => {
    var state = store.getState();

    console.log('currentState', store.getState());
    if(state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if(state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
    }
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Laila'));

store.dispatch(actions.changeName('Jhamar'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Michael'));

store.dispatch(actions.addMovie('The Godfather', 'Drama'));

store.dispatch(actions.addMovie('Men In Black', 'Adventure'));

store.dispatch(actions.addMovie('Get Out', 'Horror'));

store.dispatch(actions.removeMovie(1));
