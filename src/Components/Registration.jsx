import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  // Retrieve data from localStorage
  const getLocaleStorageData = () => {
    const localData = localStorage.getItem("register");
    return localData ? JSON.parse(localData) : [];
  };

  // Registration state
  const [registerData, setRegisterData] = useState(getLocaleStorageData);
  const [error, setError] = useState("");

  // Form inputs using refs
  const emailData = useRef();
  const passwordData = useRef();
  const cpasswordData = useRef();

  // Update localStorage whenever registerData changes
  useEffect(() => {
    localStorage.setItem("register", JSON.stringify(registerData));
  }, [registerData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailData.current.value;
    const password = passwordData.current.value;
    const confirmPassword = cpasswordData.current.value;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Create a new user object
    const newUser = { email, password };
    setRegisterData([...registerData, newUser]);
    setError(""); // Clear error if registration is successful

    // Clear input fields
    emailData.current.value = "";
    passwordData.current.value = "";
    cpasswordData.current.value = "";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for an Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Already have an account?
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-3" onSubmit={handleSubmit}>
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
                  type="email"
                  required
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  type="password"
                  required
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  type="password"
                  required
                  className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
