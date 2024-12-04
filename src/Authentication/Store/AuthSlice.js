import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    status: false,
    theme: "dark",
  },
  reducers: {
    login(state, action) {
      (state.status = "true"), (state.user = action.payload.user);
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    logout(state) {
      (state.status = "false"), (state.user = null);
      localStorage.setItem("user", null);
    },
    changeTheme(state, action) {
      state.theme = action.payload.theme;
    },
  },
});
export const { login, logout, changeTheme } = authSlice.actions;
export default authSlice.reducer;
