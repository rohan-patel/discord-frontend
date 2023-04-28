import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import { Typography } from "@mui/material";
import { chatType } from "../../../store/actions/chatActions";
import GroupInvite from "./GroupInvite";

const MainContainer = styled("div")({
  width: "98%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
  // flexDirection: "column",
  marginTop: "10px",
});

const MessageHeaderContainer = styled("div")({
  // width: "98%",
  display: "flex",
  flexDirection: "column",
  // marginTop: "10px",
});

const MessagesHeader = ({ name = "", type }) => {
  // console.log(type);
  return (
    <MainContainer>
      <MessageHeaderContainer>
        <Avatar large username={name} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "white",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#b9bbbe",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          This is the beginning of your conversation with {name}
          {type === chatType.GROUP ? <GroupInvite /> : null}
        </Typography>
      </MessageHeaderContainer>
      {/* {type === chatType.GROUP ? <GroupInvite /> : null} */}
    </MainContainer>
  );
};

export default MessagesHeader;
