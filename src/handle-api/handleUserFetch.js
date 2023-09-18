import { createAsyncThunk } from "@reduxjs/toolkit";
import {signUPActions} from "./handelSignupApi"
import axios from "axios";
import { loginActions } from "./handleLogin";

export const fetchUser = createAsyncThunk("userState/fetchUser", async (initialPost, thunkAPI) => {
  try {
     const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}api/auth/authentication/success`,
    {
      withCredentials: true,
    }
  );
  return data;

  } catch (err) {
   return thunkAPI.rejectWithValue(err.response.data)
  }
});

export const fetchUserAction = (builder) => {
  fetchUserActions(builder)
  signUPActions(builder)
  loginActions(builder)
};

function fetchUserActions(builder){
  builder.addCase(fetchUser.pending, (state) => {
    state.isLoading = true;
    state.isUserLogged = false;
    console.log("pending");
  });
  builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isUserLogged = true;
      state.profile = action.payload;
      console.log(state.profile)
  });
  builder.addCase(fetchUser.rejected, (state, action) => {
    state.isLoading = false;
    state.isUserLogged = false;
    state.error = action.payload
    console.log(state.error)
  });
}

