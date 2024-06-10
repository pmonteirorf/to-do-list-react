import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTaskDialog({ open, editDialogHandler, task, editTask}) {
    const [editedText, setEditedText] = useState(task.text)

    const textHandler = () => {
        editTask(task.id, editedText);
        editDialogHandler();
    }

    return (
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={editDialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        >
        <DialogTitle>{"Editing Task"}</DialogTitle>
        <DialogContent>
            <TextField defaultValue={editedText} onChange={(e) => setEditedText(e.target.value)} fullWidth></TextField>
        </DialogContent>
        <DialogActions>
            <Button onClick={editDialogHandler}>Cancel</Button>
            <Button onClick={textHandler}>Update</Button>
        </DialogActions>
        </Dialog>
    );
}
