const { createSlice } = require("@reduxjs/toolkit");

const checkLoginSlice = createSlice({
    name:'checkLogin',
    initialState:{isUserLogin:false},
    reducers: {
        setLogin: (state,action) => {
          state.isUserLogin = action.payload ;
        },
        setLogout: (state,action) => {
          state.isUserLogin = action.payload;
        },
      },
})

export const {setLogin,setLogout} = checkLoginSlice.actions;
export default checkLoginSlice.reducer;