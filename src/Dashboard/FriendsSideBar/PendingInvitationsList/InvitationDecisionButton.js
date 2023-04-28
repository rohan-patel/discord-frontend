import React from "react";
import CheckCircle from "@mui/icons-material/CheckCircleRounded";
import ClearRounded from "@mui/icons-material/ClearRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const InvitationDecisionButton = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton
        style={{
          color: "white",
        }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckCircle />
      </IconButton>
      <IconButton
        style={{
          color: "white",
        }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <ClearRounded />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButton;
