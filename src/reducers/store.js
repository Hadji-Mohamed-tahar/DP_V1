import { createStore } from "redux";

import { SET_LANGUAGE, SET_DIRECTION } from "../actions/actions";

const initialState = {
  language: "ar",
  direction: "LTR",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: // إضافة الحالة لتحديث اللغة
      return {
        ...state,
        language: action.payload,
      };
    case SET_DIRECTION: // إضافة الحالة لتحديث اتجاه الكتابة
      return {
        ...state,
        direction: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
