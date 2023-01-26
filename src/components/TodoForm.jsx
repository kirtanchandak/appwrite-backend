import React from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwrite";
import { useState } from "react";
import { Permission, Role } from "appwrite";
import { ID } from "appwrite";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      "63cb943c9073b43ebe6a",
      "63cb944524f26fe25c52",
      uuidv4(),
      { todo },
      [Permission.read(Role.users())]
    );

    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    e.target.reset();
  };
  return (
    <div>
      <section className="container h-screen max-h-screen px-3 max-w-xl mx-auto flex flex-col">
        <div className="my-auto p-16 rounded-lg text-center">
          <div className="font-bold text-3xl md:text-5xl lg:text-6xl">
            📝 <br /> &nbsp; toTooooDoooos
          </div>
          <form onSubmit={handleSumbit}>
            <input
              type="text"
              className="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
              placeholder="🤔   What to do today?"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default TodoForm;
