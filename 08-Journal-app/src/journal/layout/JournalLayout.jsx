import React from "react";
import { Box } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar drawerWidth={drawerWidth} />
      <NavBar drawerWidth={drawerWidth} />

      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}></Box>
      {/* tolbar */}
      {children}
    </Box>
  );
};
