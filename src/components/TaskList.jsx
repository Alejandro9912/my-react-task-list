import Task from "./Task";
import "../styles/TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
