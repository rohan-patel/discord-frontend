import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
  // GET_ONLINE_USERS: "FRIENDS.GET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendsInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendsInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  // console.log(pendingFriendsInvitations);
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};

const sendFriendsInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    console.log(data);
    const response = await api.sendFriendsInvitation(data);

    console.log(response);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data?.details));
      // closeDialogHandler();
    } else {
      dispatch(openAlertMessage("Invitation has been sent!"));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data?.details));
    } else {
      dispatch(openAlertMessage("Invitation accepted!"));
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data?.details));
    } else {
      dispatch(openAlertMessage("Invitation rejected!"));
    }
  };
};
