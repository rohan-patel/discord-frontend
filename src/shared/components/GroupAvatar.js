import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import OnlineIndicator from "../../Dashboard/FriendsSideBar/FriendsList/OnlineIndicator";

const AvatarPreview = styled("div")({
  height: "48px",
  width: "48px",
  backgroundColor: "#5865f2",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  // marginLeft: "5px",
  color: "white",
});

const AvatarPreviewLarge = styled("div")({
  height: "80px",
  width: "80px",
  fontSize: "40px",
});

const GroupAvatar = ({ groupName }) => {
  // console.log(groupName);
  return <AvatarPreview>{groupName.substring(0, 1)}</AvatarPreview>;
};

export default GroupAvatar;
