import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddGroupDialog from "./AddGroupDialog";

const AddGroupButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenCreateGroupDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseCreateGroupDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
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
        onClick={handleOpenCreateGroupDialog}
      >
        <AddRoundedIcon />
      </Button>
      <AddGroupDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseCreateGroupDialog}
      />
    </>
  );
};

export default AddGroupButton;
