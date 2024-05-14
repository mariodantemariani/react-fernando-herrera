import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
            // <ListItem key={note.id} disablePadding>
            //   <ListItemButton>
            //     <ListItemIcon>
            //       <TurnedInNot />
            //     </ListItemIcon>
            //     <Grid container>
            //       <ListItemText primary={note.title} />
            //       <ListItemText
            //         secondary={"Exercitation cillum irure elit consectetur."}
            //       />
            //     </Grid>
            //   </ListItemButton>
            // </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
