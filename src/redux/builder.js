import { signUPActions } from "../handle-api/handelSignupApi";
import { loginActions } from "../handle-api/handleLogin";
import { fetchUserActions } from "../handle-api/handleUserFetch";

export const builderActions = (builder) => {
    fetchUserActions(builder)
    signUPActions(builder)
    loginActions(builder)
  };