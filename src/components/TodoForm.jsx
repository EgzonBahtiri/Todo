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
      "6489071dd144feacd5a8",
      "64890732de7d5e18c789",
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
    <div className="max-w-6xl mx-auto mt-10">
      <p className="flex mb-4 ">Enter to do list</p>
      <form
        action=""
        className="flex justify-center mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Write something..."
          className="border py-3 pl-6 w-full rounded"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        {/* <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button> */}
      </form>
      <Todos listOfNotes={list} />
    </div>
  );
};

export default TodoForm;
