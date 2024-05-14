import { useDispatch, useSelector } from "react-redux";

import { IconButton, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal";
import { useMemo } from "react";

export { Typography } from "@mui/material";
export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    console.log("onClickNewNote");
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Sint id officia amet velit do aliqua aliqua est ea velit minim voluptate
        duis laboris. Esse esse consectetur ullamco excepteur ullamco amet.
        Mollit est nostrud nisi irure magna dolor eiusmod aliquip aliqua nostrud
        incididunt enim. Velit ipsum laborum Lorem anim laboris aute ullamco
        ipsum do adipisicing irure.
      </Typography> */}
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
        onClick={onClickNewNote}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
