import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("userState/fetchUser", async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}api/auth/authentication/success`,
    {
      withCredentials: true,
    }
  );
  return data;
  
});

export const fetchUserAction = (builder) => {
  fetchUserActions(builder)
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
  });
  builder.addCase(fetchUser.rejected, (state, action) => {
    state.isLoading = false;
    state.isUserLogged = false;
    state.error = action.error.message;
    console.log(state.error);
  });
}

