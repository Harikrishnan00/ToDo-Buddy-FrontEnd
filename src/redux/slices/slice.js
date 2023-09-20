import { createSlice} from "@reduxjs/toolkit";
import { builderActions } from "../builder";


// state initialization
const initialState = {
  profile:{},
  isUserLogged: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    changeUserState:(state,action)=>{
      state.isLoading = false;
      state.isUserLogged = true;
      state.profile = action.payload;
    },
    userErrorHandle:(state,action) =>{
      state.error = action
      console.log(state.error)
    }
  },
  extraReducers:builderActions
});

export const { changeUserState, userErrorHandle } = userSlice.actions;

export default userSlice.reducer;
