import React from "react";
import { styled } from "@mui/system";

const AvatarPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview
      style={
        large
          ? {
              height: "80px",
              width: "80px",
              fontSize: "40px",
            }
          : {}
      }
    >
      {username.substring(0, 1)}
    </AvatarPreview>
  );
};

export default Avatar;
