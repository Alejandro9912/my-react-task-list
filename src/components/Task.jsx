import { useState } from "react";
import "../styles/Task.css";

const Task = ({
  id,
  name,
  description,
  isCompleted,
  updateTask,
  deleteTask,
}) => {
  const [taskName, setTaskName] = useState(name);
  const [taskDescription, setTaskDescription] = useState(description);
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
    updateTask(id, taskName, taskDescription, taskIsCompleted);
    // Puedes enviar la nueva tarea al componente padre aquí si es necesario
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTaskName(name);
    setTaskDescription(description);
  };

  const handleChangeName = (event) => {
    setTaskName(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  return (
    <div className="container">
      <li>
        <button className="completed" onClick={handleComplete}>
          {taskIsCompleted ? "◉" : "◯"}
        </button>
        {isEditing ? (
          <>
            <form action="">
              <input type="text" value={taskName} onChange={handleChangeName} />
              <input
                type="text"
                value={taskDescription}
                onChange={handleChangeDescription}
              />
              <button onClick={handleSave}>Ok</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </form>
          </>
        ) : (
          <>
            <span
              className={`completed ${taskIsCompleted ? "crossed" : ""}`}
              style={{ fontWeight: "bold" }}
            >
              {taskName}:
            </span>
            <span className={`completed ${taskIsCompleted ? "crossed" : ""}`}>
              {taskDescription}
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
