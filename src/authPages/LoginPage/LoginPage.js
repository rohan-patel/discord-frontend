import React from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInput";
import { useState, useEffect } from "react";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom";
import NgrokDialog from "../../shared/components/NgrokDialog";

const LoginPage = ({ login }) => {
  const navigate = useNavigate();

  const [principal, setPrincipal] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");

  useEffect(() => {
    const { value, message } = validateLoginForm({ principal, password });
    setIsFormValid(value);
    setTooltipMessage(message);
  }, [principal, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      principal,
      password,
    };

    login(userDetails, navigate);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput
        principal={principal}
        setPrincipal={setPrincipal}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter
        isFormValid={isFormValid}
        handleLogin={handleLogin}
        tooltipMessage={tooltipMessage}
      />
      <NgrokDialog />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
