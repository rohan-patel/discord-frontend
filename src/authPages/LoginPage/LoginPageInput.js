import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInput = ({ principal, setPrincipal, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={principal}
        setValue={setPrincipal}
        label="Username"
        type="text"
        placeholder="Enter Email or Username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default LoginPageInput;
