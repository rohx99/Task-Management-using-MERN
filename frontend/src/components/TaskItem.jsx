import React, { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  // Toggle the editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle task update
  const handleUpdate = () => {
    updateTask(task._id, {
      title: editedTitle,
      description: editedDescription,
      status: task.status,
    });
    setIsEditing(false);
  };

  const handleStatusChange = () => {
    updateTask(task._id, {
      ...task,
      status: task.status === "pending" ? "completed" : "pending",
    });
  };

  return (
    <div
      className={`task-item ${task.status} p-3 font-medium bg-[#f59115] rounded-md hover:scale-105 duration-300 transition ease-in-out delay-150`}
    >
      {isEditing ? (
        <div className="flex text-black flex-col gap-2">
          <input
            type="text"
            className="outline-none p-1 rounded-md"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="New Title"
          />
          <textarea
            value={editedDescription}
            className="outline-none p-1 rounded-md"
            placeholder="New Description"
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button
            className="border bg-blue-500 text-sm rounded-md p-1 text-white"
            onClick={handleUpdate}
          >
            Save
          </button>
          <button
            className="border bg-blue-500 text-sm rounded-md p-1 text-white"
            onClick={toggleEdit}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl text-pink-700">
            <span className="text-black">Title: </span>
            {task.title}
          </h3>
          <p className="text-[#fcf5e5]">
            <span className="text-black">Description: </span>
            {task.description}
          </p>
          <div className="mt-5 flex justify-between text-white">
            <button
              className="border bg-blue-500 text-sm rounded-md p-1 mr-2"
              onClick={handleStatusChange}
            >
              {task.status === "pending"
                ? "Mark as Completed"
                : "Mark as Pending"}
            </button>
            <button
              className="border bg-blue-500 text-sm rounded-md p-1 mr-2"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="border bg-blue-500 text-sm rounded-md p-1"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
