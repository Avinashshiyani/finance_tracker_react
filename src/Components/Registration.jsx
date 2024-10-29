
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  // get data from localstorage
  const getLocaleStorageData = () => {
    const localData = localStorage.getItem("register");
    return localData ? JSON.parse(localData) : [];
  };

  // registration state
  const [registerData, setRegisterData] = useState(getLocaleStorageData);

  // form handling
  let emailData = useRef();
  let passwordData = useRef();
  let cpasswordData = useRef();

  useEffect(() => {
    localStorage.setItem("register", JSON.stringify(registerData));
  }, [registerData]);

  
  const handleSubmit = (e) => {
    let email = emailData.current.value;
    let pass = passwordData.current.value;
    let confirmPass = cpasswordData.current.value;
    e.preventDefault();
    setRegisterData([...registerData, email, pass, confirmPass]);
    emailData.current.value = "";
    passwordData.current.value = "";
    cpasswordData.current.value = "";
  };

import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center  sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registration For the Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or
            <Link
              to={"/login"}
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Already Have an Account !
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-3" onSubmit={handleSubmit}>
            <form className="space-y-3">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    ref={emailData}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required=""
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    ref={passwordData}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required=""
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    ref={cpasswordData}
                    id="cpassword"
                    name="cpassword"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required=""
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  {/* <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a> */}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
