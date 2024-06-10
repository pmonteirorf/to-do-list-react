import React, { useState } from 'react'
import { Container, List } from '@mui/material';
import Form from '../componets/Form';
import TodoItem from '../componets/TodoItem';

export default function Home() {
  const [listTask, setListTask] = useState([])

  const addTask = (task) => {
    setListTask([...listTask, task])
  }

  const deleteTask = (id) =>{
    var filtered = listTask.filter((task) => task.id !== id);
    setListTask(filtered);
  }

  const editTask = (id, editedText) =>{
    var listTaskEdited = [...listTask];
    for(var i in listTaskEdited) {
      if(listTaskEdited[i].id === id){
        listTaskEdited[i].text = editedText;
      }      
    }
    setListTask(listTaskEdited);
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTask={addTask}/>
      <List sx={{marginTop: "1em" }}>
        {listTask.map( (task) => 
          <div key={task.id} style={{ marginTop: "1em"}}>
            <TodoItem task={task} deleteTask={deleteTask} editTask={editTask}/> 
          </div>        
        )}
        
      </List>      
    </Container>
  )
}


// https://youtu.be/ipI0IIJJPmo?si=w8aVkqUXJALVitkN&t=1032