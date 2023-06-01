import { IAuthState } from "./../../../common/types/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  user: {
    id: null,
    firstName: "",
    userName: "",
    email: "",
    createAt: "",
    updateAt: "",
    watchList: [
      {
        id: null,
        name: "",
        assetId: "",
        updateAt: "",
        user: null,
      },
    ],
  },
  isLogged: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
