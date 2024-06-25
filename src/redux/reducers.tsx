import { SET_USERNAME, SET_FIRSTNAME, SET_LASTNAME, SET_KEEP_LOGGED_IN, SET_DARK_LIGHT_MODE } from "./actions";

const initialState = {
    username: '',
    firstname: '',
    lastname: '',
    keepLoggedIn: false,
    dlmode: 'light',
}

const userReducer = (state = initialState, action: {
    payload: any; type: any; 
}) => {
    switch (action.type) {
        case SET_USERNAME:
            return {...state, username: action.payload}
        case SET_FIRSTNAME:
            return {...state, firstname: action.payload}
        case SET_LASTNAME:
            return {...state, lastname: action.payload}     
        case SET_KEEP_LOGGED_IN:
            return {...state, keepLoggedIn: action.payload}
        case SET_DARK_LIGHT_MODE:
            return {...state, dlmode: action.payload}
        default:
            return state;
    }
}

export default userReducer;