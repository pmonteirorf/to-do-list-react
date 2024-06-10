import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ addTask }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const taskCreate = (text) => {
    const taskObj = {text: text, id: id};
    setId(id + 1);
    addTask(taskObj);

    //Procurar forma melhor de ser feita
    document.getElementById("outlined-basic").value = null;
  }

  return (  
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button variant="text" onClick={() => taskCreate(text)}>Add</Button>
      </div>
    </Paper>
  );
}
