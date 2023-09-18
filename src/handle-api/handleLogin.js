import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "userState/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}api/auth/login`,
          {
            email,
            password
          },{
            withCredentials:true
          }
        );
  
        return data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  );

  export function loginActions(builder) {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isUserLogged = false;
      console.log("pending");
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isUserLogged = true;
      state.profile = action.payload;
      console.log(state.profile)
      window.location.href = "http://localhost:5173/todo";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isUserLogged = false;
      state.error = action.payload;
    });
  }