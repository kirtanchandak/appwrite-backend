import { account } from "../appwrite/appwrite";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import Login from "./Login";

function Profile() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setuserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogOut = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <div>
          <nav className="w-full top-0 left-0 right-0 z-10 py-5">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block ml-5">
                  {/* LOGO */}
                  <Link href="/">
                    <h2 className="">{userDetails.email}</h2>
                  </Link>
                  {/* HAMBURGER BUTTON FOR MOBILE */}
                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 32 32"
                          className="w-10"
                        >
                          <path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 50 50"
                          className="focus:border-none active:border-none w-6"
                        >
                          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "p-2 md:p-0 block" : "hidden"
                  }`}
                >
                  <li className="pb-1 py-2 md:px-6 text-center">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      <button
                        className="px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
                        onClick={handleLogOut}
                      >
                        LogOut
                      </button>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </nav>
          <TodoForm />
          <Todos />
        </div>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default Profile;
