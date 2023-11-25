import "../styles/Task.css";

const Task = ({ name, isCompleted }) => {
  return (
    <div className="container">
      <li>
        <span className="completed">{isCompleted ? "◉" : "◯"}</span>
        <span>{name}</span>
      </li>
    </div>
  );
};

export default Task;
