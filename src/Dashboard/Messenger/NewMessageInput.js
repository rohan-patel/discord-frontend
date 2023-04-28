import React, { useState } from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import {
  sendDirectMessage,
  sendGroupMessage,
} from "../../realTimeCommunication/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
});

const NewMessageInput = ({ chosenChatDetails, chatType }) => {
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    console.log("Sending message to the server");

    const { username } = JSON.parse(localStorage.getItem("user"));

    if (message.length > 0) {
      if (chatType === "DIRECT") {
        sendDirectMessage({
          receiverId: chosenChatDetails.id,
          senderUsername: username,
          content: message,
        });
      }
      if (chatType === "GROUP") {
        sendGroupMessage({
          groupId: chosenChatDetails.id,
          senderUsername: username,
          content: message,
        });
      }
      setMessage("");
    }
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write a message to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
