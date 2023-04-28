import React, { useEffect } from "react";
import { styled } from "@mui/system";
import PendingInvitaionListItem from "./PendingInvitaionListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitaionList = ({ pendingFriendsInvitations }) => {
  // useEffect(() => {
  //   console.log(pendingFriendsInvitations);
  // }, [pendingFriendsInvitations]);

  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => (
        <PendingInvitaionListItem
          key={invitation.userId}
          id={invitation.userId}
          username={invitation.username}
          email={invitation.email}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(PendingInvitaionList);
