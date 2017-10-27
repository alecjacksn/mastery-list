var initialState = {
    tab: false,
    item: 'Got it',
    reload: true
}


const OPEN_TAB = "OPEN_TAB"
const GET_ITEM = "GET_ITEM"
const UPDATE_MASTER = "UPDATE_MASTER"

export default function reducer(state = initialState, action) {
    console.log('action', action.type)
    console.log('payload', action.payload)
    console.log('action', action)
    switch (action.type) {
        case OPEN_TAB:
            return Object.assign({}, state, { tab: action.payload })
        case GET_ITEM:
            return Object.assign({}, state, { item: action.payload })
        case UPDATE_MASTER:
            return Object.assign({}, state, { reload: action.payload })
        default:
            return state;
    }
}

export function changeItem(item) {
    return {
        payload: item,
        type: GET_ITEM
    }
}


export function tabTF(click) {
    return {
        payload: click,
        type: OPEN_TAB
    }
}



export function getUserInfo(tf) {
    return {
        payload: tf,
        type: UPDATE_MASTER
    }
}