const { createSlice } = require("@reduxjs/toolkit");

const checkLoginSlice = createSlice({
    name:'checkLogin',
    initialState:{isUserLogin:false},
    reducers: {
        setLogin: (state,action) => {
          const {isUserLogin,encodedData} = action.payload
          state.isUserLogin = isUserLogin ;
          state.userId = encodedData.userId
        },
        setLogout: (state,action) => {
          state.isUserLogin = action.payload;
        },
      },
})

export const {setLogin,setLogout} = checkLoginSlice.actions;
export default checkLoginSlice.reducer;