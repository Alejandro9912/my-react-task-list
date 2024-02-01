import { useState } from "react";
import TaskList from "../components/TaskList";
import Header from "../components/Header";

export const Tasks = () => {
  const [allTasks, setAllTasks] = useState([]);

  const updateList = (newTaskList) => {
    setAllTasks(newTaskList);
  };

  return (
    <>
      <Header />
      {<TaskList tasks={allTasks} updateTaskList={updateList} />}
    </>
  );
};
