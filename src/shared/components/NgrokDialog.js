import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import { socketUrl } from "../../ngrok";

const NgrokDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [firstLogin, setFirstLogin] = useState(false);

  useEffect(() => {
    const ngrok = JSON.parse(localStorage.getItem("ngrok"));
    if (ngrok) {
      setFirstLogin(false);
      if (ngrok.url !== socketUrl) {
        setIsDialogOpen(true);
      }
    } else {
      setFirstLogin(true);
      setIsDialogOpen(true);
    }
  }, []);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleRedirect = () => {
    const ngrok = {
      url: socketUrl,
    };
    localStorage.setItem("ngrok", JSON.stringify(ngrok));
    setIsDialogOpen(false);
    setFirstLogin(false);
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>A small step before using app</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              {firstLogin
                ? "It seems you are logging in for the first time."
                : "There has been some changes in the server."}
            </Typography>
          </DialogContentText>
          <DialogContentText>
            <Typography>
              Before moving ahead, can you please click on the below button,
              which will redirect you to another page and click Visit Page there
              and then com back so that you don't face any issues using the
              application. This is a one time process
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5865F2",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
              width: "100%",
              height: "40px",
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
            href={`${socketUrl}/socket.io/`}
            target="_blank"
            onClick={handleRedirect}
          >
            Visit Page
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NgrokDialog;
