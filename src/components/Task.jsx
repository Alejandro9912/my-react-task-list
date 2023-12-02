import { useState } from "react";
import "../styles/Task.css";

const Task = ({ id, name, isCompleted, updateTask, deleteTask }) => {
  const [taskName, setTaskName] = useState(name);
  const [taskIsCompleted, setTaskIsCompleted] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    console.log(id);
    deleteTask(id);
  };
  const handleComplete = () => {
    setTaskIsCompleted(!taskIsCompleted);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateTask(id, taskName, taskIsCompleted);
    // Puedes enviar la nueva tarea al componente padre aquí si es necesario
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTaskName(name);
  };

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <div className="container">
      <li>
        <button className="completed" onClick={handleComplete}>
          {taskIsCompleted ? "◉" : "◯"}
        </button>
        {isEditing ? (
          <>
            <input type="text" value={taskName} onChange={handleChange} />
            <button onClick={handleSave}>Ok</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <span className={`completed ${taskIsCompleted ? "crossed" : ""}`}>
              {taskName}
            </span>
            <button className="completed" onClick={handleDelete}>
              ✖️
            </button>
            <button className="completed" onClick={handleEdit}>
              🖋️
            </button>
          </>
        )}
      </li>
    </div>
  );
};

export default Task;
