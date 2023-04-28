import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import InputWithLabel from "../../shared/components/InputWithLabel";
import { getActions } from "../../store/actions/groupActions";
import { connect } from "react-redux";

const AddGroupDialog = ({ isDialogOpen, closeDialogHandler, createGroup }) => {
  const [groupName, setGroupName] = useState("");

  const handleCreateGroup = () => {
    // send a request to server for creating the group
    const user = JSON.parse(localStorage.getItem("user"));
    createGroup(
      {
        groupName: groupName,
        userId: user.userId,
      },
      handleCloseDialog
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setGroupName("");
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Create a Group</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter the Group name you want to create</Typography>
          </DialogContentText>
          <InputWithLabel
            label="Group Name"
            type="text"
            value={groupName}
            setValue={setGroupName}
            placeholder="Enter the Group Name"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleCreateGroup}
            disabled={groupName === "" ? true : false}
            label="Create"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispacth) => {
  return {
    ...getActions(dispacth),
  };
};

export default connect(null, mapActionsToProps)(AddGroupDialog);
