var redux = require('redux');

console.log('Starting redux example');

var oldReducer = (state = stateDefault, action) => {

    switch (action.type){
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
            };
        default:
            return state;
    }
};

var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type){
      case 'CHANGE_NAME':
          return action.name
      default:
          return state;
  }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }

            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id)
        default:
            return state;
    }
};

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};

var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    movie: action.movie
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)
        default:
            return state;
    }
};

var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes
store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('currentState', store.getState());
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Laila'));

store.dispatch(changeName('Jhamar'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Michael'));

store.dispatch(addMovie('The Godfather', 'Drama'));

store.dispatch(addMovie('Men In Black', 'Adventure'));

store.dispatch(addMovie('Get Out', 'Horror'));

store.dispatch(removeMovie(1));
