import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/appwriteConfig";

const Todos = ({ listOfNotes }) => {
  const [todos, setTodos] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTodos = databases.listDocuments(
      "6487a55e1e3f23cc5cc9",
      "6487a5ccf40b393aad99"
    );
    getTodos.then(
      function (response) {
        const newTodos = response.documents;
        setTodos(() => [...newTodos.reverse()]);
        console.log(listOfNotes);
        //console.log(todos);
      },
      function (error) {
        console.log(error);
      }
    );
    setLoader(false);
  }, [listOfNotes]);

  const deleteTodo = (id) => {
    console.log(id);
    const promise = databases.deleteDocument(
      "6487a55e1e3f23cc5cc9",
      "6487a5ccf40b393aad99",
      id
    );
    promise.then(
      function (response) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.$id !== id));
      },
      function (error) {
        console.log(error);
        console.log(id);
      }
    );
  };

  return (
    <div className="border px-6 py-6 rounded">
      <div className="max-w-7xl mx-auto">
        {loader ? (
          <p>Loading ...</p>
        ) : (
          <div>
            {todos &&
              todos.map((item) => (
                <div key={item.$id}>
                  <div className="p-6 flex items-center justify-between bg-[#FAFCFF] border rounded mb-6">
                    <div>
                      <p>{item.todo}</p>
                    </div>
                    <div>
                      <span
                        className="text-red-400 cursor-pointer"
                        onClick={() => {
                          deleteTodo(item.$id);
                        }}
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todos;
