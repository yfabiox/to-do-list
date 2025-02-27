import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './App.css';
import { v4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])



  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Preciso atualizar essa tarefa

      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      //Nao preciso atualizar essa tarefa

      return task;
    });
    setTasks(newTasks);
  }

  function onDeletetaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(text, description) {
    const newTask = {
      id: v4(),
      text,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-200 font-bold text-center text-3xl">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeletetaskClick={onDeletetaskClick} />
      </div>
    </div>

  );
}

export default App;