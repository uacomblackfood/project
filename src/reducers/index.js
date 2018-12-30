import { combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory.js'

const initialState = {}

function store(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}

export const history = createBrowserHistory({ basename : '/' })

export default combineReducers({
    store
})