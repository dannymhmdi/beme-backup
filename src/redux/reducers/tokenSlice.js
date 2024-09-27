import { createSlice } from "@reduxjs/toolkit";
const tokenSlice = createSlice({
  name: "hasToken",
  initialState: { accessToken: "" },
  reducers: {
    setToken: (state, action) => {
    //   return {...state,accessToken:action.payload}
    state.accessToken = action.payload
    },
    deleteToken: (state) => {
      state.accessToken = "";
    },
  },
});

export const {setToken , deleteToken} = tokenSlice.actions;
export default tokenSlice.reducer;