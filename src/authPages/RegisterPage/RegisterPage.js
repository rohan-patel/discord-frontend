import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authAction";

const RegisterPage = ({ register }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const [toolTipMessage, setToolTipMessage] = useState("");

  useEffect(() => {
    const { value, message } = validateRegisterForm({
      email,
      password,
      username,
    });

    setIsFormValid(value);
    setToolTipMessage(message);
  }, [email, username, password]);

  const handleRegister = () => {
    const userDetails = {
      email,
      username,
      password,
    };

    register(userDetails, navigate);
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an Account
      </Typography>
      <RegisterPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
        tooltipMessage={toolTipMessage}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
