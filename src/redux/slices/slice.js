import { createSlice} from "@reduxjs/toolkit";
import { fetchUserActions } from "../../handle-api/handleUserFetch";

// state initialization
const initialState = {
  profile:{},
  isUserLogged: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {},
  extraReducers:fetchUserActions
});

export const { userStateChanger } = userSlice.actions;

export default userSlice.reducer;
