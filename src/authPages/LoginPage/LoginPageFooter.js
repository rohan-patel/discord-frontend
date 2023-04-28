import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid, tooltipMessage }) => {
  const navigate = useNavigate();

  const handleNavigateToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip title={tooltipMessage}>
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an Account? "
        redirectText="Create an Account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handleNavigateToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
