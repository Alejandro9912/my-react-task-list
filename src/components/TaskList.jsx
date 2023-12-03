import Task from "./Task";
import "../styles/TaskList.css";
import { useRef } from "react";
import useTaskManage from "../hooks/useTaskManage";

const TaskList = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManage();
  const inputRef = useRef();

  const addTask = () => {
    createTask(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Add Task" ref={inputRef} />
        <button onClick={addTask}>+</button>
      </div>
      <ul className="list">
        {tasks.map((task) => (
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
