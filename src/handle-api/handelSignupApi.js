import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
  "userState/signUp",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/signup`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export function signUPActions(builder) {
  builder.addCase(signUp.pending, (state) => {
    state.isLoading = true;
    state.isUserLogged = false;
    console.log("pending");
  });
  builder.addCase(signUp.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isUserLogged = true;
    state.profile = action.payload;
    window.location.href = "http://localhost:5173/todo";
  });
  builder.addCase(signUp.rejected, (state, action) => {
    state.isLoading = false;
    state.isUserLogged = false;
    state.error = action.payload;
  });
}
