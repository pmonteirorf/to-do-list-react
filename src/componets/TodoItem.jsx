import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTaskDialog from './EditTaskDialog';


export default function TodoItem({ task, deleteTask, editTask }) {
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const editDialogHandler = () => {
        setOpenEditDialog(!openEditDialog);
    }

    return (
        <>
        <EditTaskDialog open={openEditDialog} editDialogHandler={editDialogHandler} task={task} editTask={editTask}/>

        <Paper style={{ padding: "0.5em 0em"}}>
            <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
            >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                />
                </ListItemIcon>
                <ListItemText  primary={task.text} onClick={() => setOpenEditDialog(true)}/>
            </ListItemButton>
            </ListItem>
        </Paper>
        </>
    );  
}
