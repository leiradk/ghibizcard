export const SET_USERNAME = 'SET_USERNAME';
export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const SET_LASTNAME = 'SET_LASTNAME';
export const SET_KEEP_LOGGED_IN = 'SET_KEEP_LOGGED_IN';
export const SET_DARK_LIGHT_MODE = 'SET_DARK_LIGHT_MODE';

// Set Username.
export const setUsername = (username: string) => (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    dispatch({
        type: SET_USERNAME,
        payload: username,
    });
}

// Set Firstname.
export const setFirstname = (firstname: string) => (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    dispatch({
        type: SET_FIRSTNAME,
        payload: firstname,
    });
}

// Set Lastname.
export const setLastname = (lastname: string) => (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    dispatch({
        type: SET_LASTNAME,
        payload: lastname,
    });
}

// Set Keep logged in.
export const setKeepLoggedIn = (keepLoggedIn: boolean) => (dispatch: (arg0: { type: string; payload: boolean; }) => void) => {
    dispatch({
        type: SET_KEEP_LOGGED_IN,
        payload: keepLoggedIn,
    });
}

// Set Dark Light mode.
export const setDarkLightMode = (mode: String) => (dispatch: (arg0: { type: string; payload: String; }) => void) => {
    dispatch({
        type: SET_DARK_LIGHT_MODE,
        payload: mode,
    });
}