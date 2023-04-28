import React from "react";
import { styled } from "@mui/system";
import GroupListItem from "./GroupListItem";
import AddGroupButton from "../AddGroupButton";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: "1",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  scrollbarWidth: "none",
  // marginLeft: "10px",
});

const GroupList = ({ groups }) => {
  console.log(groups);

  return (
    <MainContainer>
      {groups.map((group) => (
        // group.groupName;
        <GroupListItem
          key={group.groupId}
          groupName={group.groupName}
          groupId={group.groupId}
        />
      ))}
      <AddGroupButton />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ group }) => {
  return {
    ...group,
  };
};

export default connect(mapStoreStateToProps)(GroupList);
