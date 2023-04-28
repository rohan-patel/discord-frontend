import React from "react";
import { Box } from "@mui/material";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#3ba55d",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <FiberManualRecord
        sx={{
          height: "16px",
          width: "16px",
          border: "2px solid #2F3136",
          borderRadius: "50%",
          // borderColor: "black",
        }}
      />
    </Box>
  );
};

export default OnlineIndicator;
