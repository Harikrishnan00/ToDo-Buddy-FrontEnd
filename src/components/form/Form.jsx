import "./style/form.css";
import { GoogleIcon } from "../../assets/icons/icons";
import { useForm } from "react-hook-form";
import { Error } from "../components";
import { signUp } from "../../handle-api/handelSignupApi";
import { handleGoogleAuth } from "../../handle-api/handleGoogleSignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Form({ title }) {
  useEffect(() => {});

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const { email, password } = e;
    dispatch(signUp({ email, password }))
  };

  const error = useSelector((state) =>state.userStateChanger.error)
  const errorHandle = (value) => {
    if (errors[value].type === "required") {
      return handleErrorCompo(`please enter ${value}`);
    } else if (errors[value].type === "minLength") {
      return handleErrorCompo(`Minium 8 charcters required`);
    } else if (errors[value].type === "pattern") {
      return handleErrorCompo(`please enter mixed charcter`);
    }
  };

  function handleErrorCompo(message) {
    return <Error message={message} />;
  }

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h3>{title}</h3>
      <h4>WITH EMAIL</h4>
      {error?.message &&  <Error message={error?.message}/>}
      <div className="input-field-container">
        <div className="email input-field">
          <label htmlFor="email ">EMAIL</label>
          <input
            type="email"
            name="email"
            className="input"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && errorHandle("email") }
        </div>
        <div className="password input-field">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            className="input"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          />
          {errors.password && errorHandle("password")}
        </div>
      </div>
      <button type="submit" className="input">
        {title}
      </button>
      <p>OR</p>
      <h4>WITH GOOGLE</h4>
      <div className="google-auth-button input" onClick={handleGoogleAuth}>
        <img src={GoogleIcon} alt="" />
        <p>Google</p>
      </div>
    </form>
  );
}

export default Form;
