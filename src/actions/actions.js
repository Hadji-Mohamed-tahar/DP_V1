export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (user_id, username) => ({
  type: LOGIN_SUCCESS,
  payload: { user_id, username },
});

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: { location },
});


// actions.js
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_DIRECTION = 'SET_DIRECTION';

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setDirection = (direction) => ({
  type: SET_DIRECTION,
  payload: direction,
});
