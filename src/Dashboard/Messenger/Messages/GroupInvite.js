import React, { useState } from "react";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import GroupInviteDialog from "./GroupInviteDialog";

const additionalStyles = {
  // marginTop: "10px",
  marginLeft: "5px",
  width: "auto",
  height: "30px",
  background: "#3ba55d",
};

const GroupInvite = () => {
  const [isGroupInviteDialogOpen, setIsGroupInviteDialogOpen] = useState(false);

  const handleOpenGroupInviteDialog = () => {
    setIsGroupInviteDialogOpen(true);
  };

  const handleCloseGroupInviteDialog = () => {
    setIsGroupInviteDialogOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Invite Friend"
        onClick={handleOpenGroupInviteDialog}
      />
      <GroupInviteDialog
        isDialogOpen={isGroupInviteDialogOpen}
        closeDialogHandler={handleCloseGroupInviteDialog}
      />
    </>
  );
};

export default GroupInvite;
