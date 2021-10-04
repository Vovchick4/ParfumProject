import { createReducer } from "@reduxjs/toolkit";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authActions as actions } from ".";

const userInitialState = {};
const user = createReducer(userInitialState, {
  [actions.addUser]: (_, { payload }) => {
    return {
      payload,
    };
  },
  [actions.clearUser]: () => userInitialState,
});

const stepFormInitialState = [];
const stepForm = createReducer(stepFormInitialState, {
  [actions.addStepForm]: (state, { payload }) => {
    return {
      payload,
    };
  },
});

export default persistCombineReducers(
  { key: "auth", storage },
  { user, stepForm }
);
