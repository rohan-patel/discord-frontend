import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import GroupList from "./Group/GroupList";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  overflow: "auto",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
  scrollbarWidth: "none",
});

const Seperator = styled("div")({
  width: "75%",
  backgroundColor: "#b9bbbe",
  height: "1px",
  position: "relative",
  marginTop: "10px",
  marginBottom: "10px",
});

const SideBar = () => {
  return (
    <MainContainer>
      <MainPageButton />
      <Seperator />
      <GroupList />
    </MainContainer>
  );
};

export default SideBar;
