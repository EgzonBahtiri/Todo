import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

const Profile = () => {
  const navigate = useNavigate();

  const [userDetails, setuserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setuserDetails(response);
        //console.log(userDetails);
      },
      function (error) {
        //console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <>
          <div className="py-14 max-w-screen px-32 flex mx-auto justify-between bg-blue-100">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-[#2E67D6] text-white py-3 px-6 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

          <TodoForm />
          {/* TODOS BOX */}
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
};

export default Profile;
