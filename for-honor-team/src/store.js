import { createStore } from 'redux';

const initialState = {
    players: [{
        id: 1,
        name: "yo_soy_jacko3",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 2,
        name: "yo_soy_jacko2",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 3,
        name: "yo_soy_jacko1",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 4,
        name: "yo_soy_jacko3",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 5,
        name: "yo_soy_jacko2",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 6,
        name: "yo_soy_jacko1",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 7,
        name: "yo_soy_jacko3",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 8,
        name: "yo_soy_jacko2",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 9,
        name: "yo_soy_jacko1",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 10,
        name: "yo_soy_jacko3",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 11,
        name: "yo_soy_jacko2",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 12,
        name: "yo_soy_jacko1",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 13,
        name: "yo_soy_jacko3",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 14,
        name: "yo_soy_jacko2",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 15,
        name: "yo_soy_jacko1",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 16,
        name: "yo_soy_jacko3",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 17,
        name: "yo_soy_jacko2",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    },
    {
        id: 18,
        name: "yo_soy_jacko1",
        photo: "http://pm1.narvii.com/6731/31d798f2e6f144d828f7bd3bc8143dfde9316b81v2_00.jpg"
        
    }],
    startingPlayers: [],
    substitutePlayers: []
}

const reducer = (state = initialState, action) => {
    
    if(action.type === "ADD_STARTING_PLAYER") {
        return {
            ...state,
            startingPlayers: state.startingPlayers.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }

    if(action.type === "ADD_SUBSTITUTE") {
        return {
            ...state,
            substitutePlayers: state.substitutePlayers.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }

    if(action.type === "QUIT_STARTING_PLAYER") {
        return {
            ...state,
            startingPlayers: state.startingPlayers.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }

    if(action.type === "QUIT_SUBSTITUTE_PLAYER") {
        return {
            ...state,
            substitutePlayers: state.substitutePlayers.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }
    return state;
}

export default createStore(reducer)