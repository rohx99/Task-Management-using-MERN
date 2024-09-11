import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="w-[70%] sm:w-[50%] bg-[#7862f8] rounded-md mb-10">
      <h1 className="p-2 text-xl font-bold animate-bounce">
        Hi, what's the task you wanna complete ?
      </h1>
      <form className="flex flex-col p-2 gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 rounded-md text-black outline-none"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          className="p-2 rounded-md text-black outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-red-400 rounded-md outline-none hover:bg-red-500 p-2"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
