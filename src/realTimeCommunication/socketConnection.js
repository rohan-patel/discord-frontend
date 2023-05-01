import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import { setGroups } from "../store/actions/groupActions";
import store from "../store/store";
import {
  updateDirectChatHistoryIfActive,
  updateGroupChatHistoryIfActive,
} from "../shared/utils/chat";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const token = userDetails.token;
  const url = `https://6163-2402-3a80-893-d836-258b-d8e8-587e-82fd.ngrok-free.app?token=${token}`;

  socket = io(url);

  socket.on("connect", () => {
    console.log("Successfully connected with SocketIO Server");
    console.log(socket.id);
  });

  socket.on("friends-invitation", (data) => {
    store.dispatch(setPendingFriendsInvitations(data));
  });

  socket.on("friends-list", (data) => {
    store.dispatch(setFriends(data));
  });

  socket.on("online-users", (data) => {
    store.dispatch(setOnlineUsers(data));
  });

  socket.on("chat-update-history", (data) => {
    const { messages } = data;

    messages.sort(compareDates);
    // console.log(messages);

    data = { ...data, messages };
    // console.log(data);
    // console.log("Testing Hiiiiiiii");

    updateDirectChatHistoryIfActive(data);
  });

  socket.on("group-chat-update-history", (data) => {
    console.log(data);
    const { messages } = data;

    messages.sort(compareDates);
    // console.log(messages);

    data = { ...data, messages };

    updateGroupChatHistoryIfActive(data);
  });

  socket.on("group-update-history", (data) => {
    console.log(data);
    store.dispatch(setGroups(data));
  });
};

export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
};

export const sendGroupMessage = (data) => {
  console.log(data);
  socket.emit("group-message", data);
};

export const getDirectChatHistory = (data) => {
  console.log("in Direct Chat History");
  socket.emit("direct-chat-history", data);
};

export const getGroupChatHistory = (data) => {
  console.log("in Group Chat History");
  console.log(data);
  socket.emit("group-chat-history", data);
};

const compareDates = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA - dateB;
};
