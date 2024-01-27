import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
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
}

export default App;
