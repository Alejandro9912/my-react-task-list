import { useState } from "react";
import "../styles/Task.css";
import { useForm } from "react-hook-form";

const Task = ({
  id,
  name,
  description,
  isCompleted,
  updateTask,
  deleteTask,
}) => {
  const [taskIsCompleted, setTaskIsCompleted] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

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

  const handleCancelEdit = () => {
    setIsEditing(false);
    updateTask(id, name, description, isCompleted);
  };

  const onSumbit = () => {
    setIsEditing(false);
    updateTask(id, watch("taskName"), watch("taskDescription"), isCompleted);
  };

  return (
    <div className="container">
      <li>
        <button className="completed" onClick={handleComplete}>
          {taskIsCompleted ? "◉" : "◯"}
        </button>
        {isEditing ? (
          <>
            <form onSubmit={handleSubmit(onSumbit)}>
              <input
                type="text"
                defaultValue={name}
                {...register("taskName", {
                  required: {
                    value: true,
                    message: "Task name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Min 3 characters",
                  },
                })}
              />
              {errors.taskName && (
                <span style={{ color: "red" }}>{errors.taskName.message}</span>
              )}
              <input
                type="text"
                defaultValue={description}
                {...register("taskDescription")}
              />
              <button type="submit" disabled={!isValid}>
                Ok
              </button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <span
              className={`completed ${taskIsCompleted ? "crossed" : ""}`}
              style={{ fontWeight: "bold" }}
            >
              {name}:
            </span>
            <span className={`completed ${taskIsCompleted ? "crossed" : ""}`}>
              {description}
            </span>
            <button className="completed" onClick={handleEdit}>
              🖋️
            </button>
            <button className="completed" onClick={handleDelete}>
              ✖️
            </button>
          </>
        )}
      </li>
      {/* <pre style={{ color: "red" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
    </div>
  );
};

export default Task;
