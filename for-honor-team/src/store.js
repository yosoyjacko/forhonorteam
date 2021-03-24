import { createStore } from 'redux';

const initialState = {
    players: [],
    startingPlayers: [],
    substitutePlayers: []
}

const reducer = (state = initialState, action) => {
    return state;
}

export default createStore(reducer)