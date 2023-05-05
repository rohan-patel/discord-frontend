import React, { useRef, useEffect } from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import Message from "./Message";
import { connect } from "react-redux";
import DateSeperator from "./DateSeperator";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, messages, friends, chatType }) => {
  // console.log(chatType);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} type={chatType} />
      {messages.map((message, index) => {
        console.log(message);
        const sameAuthor =
          index > 0 &&
          messages[index].authorId === messages[index - 1].authorId;

        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") ===
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              "dd/mm/yy"
            );

        // console.log(friends[0].username);
        // console.log(message.date);
        // console.log(
        // convertDateToHumanReadable(new Date(message.date), "dd/mm/yy")
        // );

        const authorId = message.authorId;
        const friend = friends.find((friend) => friend.userId === authorId);
        // console.log(friend);

        const user = JSON.parse(localStorage.getItem("user"));
        // console.log(JSON.parse(user));
        let username = message.authorUsername;
        // if (typeof friend === "undefined") {
        //   username = user.username;
        // } else {
        //   username = friend?.username;
        // }

        // console.log(username);

        return (
          <div
            key={message.date}
            style={{
              width: "97%",
            }}
          >
            {(!sameDay || index === 0) && (
              <DateSeperator
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  "dd/mm/yy"
                )}
              />
            )}
            <Message
              key={message.date}
              content={message.content}
              username={username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(
                new Date(message.date),
                "dd/mm/yy"
              )}
              sameDay={sameDay}
            />
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat, friends }) => {
  return {
    ...chat,
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(Messages);
