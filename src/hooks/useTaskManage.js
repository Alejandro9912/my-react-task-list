import { useEffect, useState } from "react";

const useTaskManage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("tasks");
    const storedTasks = JSON.parse(localStorageData) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const getUniqueID = (existingIds) => {
    let createnewTaskId = 1;

    while (existingIds.includes(createnewTaskId)) {
      createnewTaskId += 1;
    }
    return createnewTaskId;
  };

  const createTask = (taskName, taskDescription) => {
    if (taskName.trim() === "") {
      return;
    }
    const existingIds = tasks.map((task) => task.id);
    const newTaskId = getUniqueID(existingIds);

    let newTask = {
      id: newTaskId,
      name: taskName,
      description: taskDescription,
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const updateTask = (taskId, taskName, taskDescription, updateIsCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            name: taskName,
            description: taskDescription,
            isCompleted: updateIsCompleted,
          }
        : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
};

export default useTaskManage;
