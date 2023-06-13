import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwriteConfig";
import Todos from "./Todos";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      "6487a55e1e3f23cc5cc9",
      "6487a5ccf40b393aad99",
      uuidv4(),
      {
        todo,
      }
    );
    promise.then(
      function (response) {
        setList(response.$id);
        console.log(response.$id);
      },
      function (error) {
        console.log(error);
      }
    );
    setTodo("");
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        className="flex justify-center mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <Todos listOfNotes={list} />
    </div>
  );
};

export default TodoForm;
