import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({
  handleRegister,
  isFormValid,
  tooltipMessage,
}) => {
  const navigate = useNavigate();

  const handleNavigateToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip title={tooltipMessage}>
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an Account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handleNavigateToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
