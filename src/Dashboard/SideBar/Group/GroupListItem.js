import React from "react";
import Button from "@mui/material/Button";
import GroupAvatar from "../../../shared/components/GroupAvatar";
import { chatType, getActions } from "../../../store/actions/chatActions";
import { connect } from "react-redux";

const GroupListItem = ({ groupName, groupId, setChosenChatDetails }) => {
  // console.log(groupName);

  const handleChooseActiveConversation = () => {
    setChosenChatDetails({ id: groupId, name: groupName }, chatType.GROUP);
  };

  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: "0",
        padding: "0",
        minWidth: "0",
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
    >
      <GroupAvatar groupName={groupName} />
    </Button>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(GroupListItem);
