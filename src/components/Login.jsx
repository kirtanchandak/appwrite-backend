import React from "react";
import { account } from "../appwrite/appwrite";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col bg-gray-800">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign In</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              id="name"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />

            <input
              type="password"
              id="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
            <button
              type="submit"
              class="w-full bg-green-400 text-center py-3 rounded bg-green text-black hover:bg-green-500 focus:outline-none my-1"
              onClick={loginUser}
            >
              Login
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-white mt-6">
            Don't have an account?
            <a
              class="no-underline border-b border-blue text-blue ml-1"
              href="/signup"
            >
              Sign Up
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
