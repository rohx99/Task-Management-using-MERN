import React from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
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
      <h3 className="text-xl text-pink-700">
        {" "}
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
          {task.status === "pending" ? "Mark as Completed" : "Mark as Pending"}
        </button>
        <button
          className="border bg-red-500 text-sm rounded-md p-1"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
