import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",                        // Slice name, used for identification.
    initialState: { isLoggedIn: false }, // Initial state with a key `isLoggedIn` set to `false`.
    reducers: {                           // Reducer functions that define how the state changes.
      login(state) {                     // This function sets `isLoggedIn` to true when called.
        state.isLoggedIn = true;
      },
      logout(state) {                    // This function sets `isLoggedIn` to false when called.
        state.isLoggedIn = false;
      },
    },
});
  

export const authActions=authSlice.actions;
export default authSlice.reducer;