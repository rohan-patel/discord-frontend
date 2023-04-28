import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import InputWithLabel from "../../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/groupActions";

const GroupInviteDialog = ({
  isDialogOpen,
  closeDialogHandler,
  addParticipant,
  chosenChatDetails,
}) => {
  const [principal, setPrincipal] = useState("");

  const handleAddTargetUserToGroup = () => {
    // Send request to serve to add the user in group
    console.log(`Added user: ${principal}`);
    console.log(chosenChatDetails);
    addParticipant(
      {
        groupId: chosenChatDetails.id,
        participant: principal,
      },
      handleCloseDialog
    );
    // handleCloseDialog();
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setPrincipal("");
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Add Participants</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email-address or username of friend which you would like to
              add
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Email or Username"
            type="text"
            value={principal}
            setValue={setPrincipal}
            placeholder="Enter E-mail Address or Username"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleAddTargetUserToGroup}
            disabled={principal === ""}
            label="Add"
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(GroupInviteDialog);
