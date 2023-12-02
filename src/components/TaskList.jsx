import Task from "./Task";
import "../styles/TaskList.css";
import { useEffect, useRef, useState } from "react";

const TaskList = ({ tasks: initialTasks, updateTaskList }) => {
  const [taskList, setTaskList] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef();

  const setLocalStorage = (updatedTasks) => {
    localStorage.setItem("list", JSON.stringify(updatedTasks));
  };
  const updateTask = (taskId, taskName, updateIsCompleted) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId
        ? { ...task, name: taskName, isCompleted: updateIsCompleted }
        : task
    );
    updateTaskList(updatedTasks);
    setTaskList(updatedTasks);

    setLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    updateTaskList(updatedTasks);
    setTaskList(updatedTasks);

    setLocalStorage(updatedTasks);
  };

  const getUniqueID = (existingIds) => {
    let createnewTaskId = 1;

    while (existingIds.includes(createnewTaskId)) {
      createnewTaskId += 1;
    }
    return createnewTaskId;
  };

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }
    const existingIds = taskList.map((task) => task.id);
    const newTaskId = getUniqueID(existingIds);

    let newTaskAdd = {
      id: newTaskId,
      name: newTask,
      isCompleted: false,
    };

    setNewTask("");

    const updatedTasks = [...taskList, newTaskAdd];
    setTaskList(updatedTasks);
    updateTaskList(updatedTasks);

    inputRef.current.value = "";

    setLocalStorage(updatedTasks);
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("list");
    const storedSelected = JSON.parse(localStorageData) || [];
    setTaskList(storedSelected);
    updateTaskList(storedSelected);
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add Task"
          ref={inputRef}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul className="list">
        {taskList.map((task) => (
          <Task
            key={task.id}
            {...task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
