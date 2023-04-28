import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import {
  getDirectChatHistory,
  getGroupChatHistory,
} from "../../realTimeCommunication/socketConnection";
import { chatType } from "../../store/actions/chatActions";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails, type }) => {
  useEffect(() => {
    // TODO
    // fetching chat history from specific user id
    // console.log(chosenChatDetails);
    if (type === chatType.DIRECT) {
      getDirectChatHistory({
        receiverUserId: chosenChatDetails.id,
      });
    }
    if (type === chatType.GROUP) {
      getGroupChatHistory({
        groupId: chosenChatDetails.id,
      });
    }
  }, [chosenChatDetails, type]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
