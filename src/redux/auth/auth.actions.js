import { createAction } from "@reduxjs/toolkit";

export const addUser = createAction("auth/addUser");
export const clearUser = createAction("auth/clearUser");

export const addStepForm = createAction("auth/stepForm");
