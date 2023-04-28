import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const groupActions = {
  SET_GROUPS: "GROUPS.SET_GROUPS",
};

export const getActions = (dispatch) => {
  return {
    createGroup: (data, closeDialogHandler) =>
      dispatch(createGroup(data, closeDialogHandler)),
    addParticipant: (data, closeDialogHandler) =>
      dispatch(addParticipant(data, closeDialogHandler)),
  };
};

export const setGroups = (groups) => {
  return {
    type: groupActions.SET_GROUPS,
    groups,
  };
};

const createGroup = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.createGroup(data);

    // console.log(response);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data?.details));
    } else {
      dispatch(openAlertMessage("Group Created"));
      closeDialogHandler();
    }
  };
};

const addParticipant = (data, closeDialogHandler) => {
  return async (dispatch) => {
    console.log(data);
    const response = await api.addParticipant(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data?.details));
    } else {
      dispatch(openAlertMessage("Participant added"));
      closeDialogHandler();
    }
  };
};
