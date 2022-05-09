import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails"

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: false,
    }
  ])

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [... tasks, {
      title: taskTitle,
      description: 'Lorem',
      completed: false,
    }]

    axios.post('http://127.0.0.1:8000/tasks/', {
      title: taskTitle,
      description: 'Lorem',
      completed: false,
    })

    setTasks(newTasks)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/tasks/")

      setTasks(data)
    }

    fetchTasks()
  }, [])

  const handleTaskClick  = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        axios.put(`http://127.0.0.1:8000/tasks/${task.id}/`, {title: task.title,
        description: task.description,
        completed: !task.completed })

        return {... task, completed: !task.completed}
      }
      return task
    })
    
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter( task => task.id !== taskId)

    axios.delete(`http://127.0.0.1:8000/tasks/${taskId}/`)

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path="/" exact render={() => (
          <>
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
        )}/>

        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  )
}

export default App

// Obs: Versão do react-router-dom@5.2.0