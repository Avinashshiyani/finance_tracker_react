import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

const OperationModel = ({}) => {
  const getLocaleStorageData = () => {
    const localData = localStorage.getItem("addExpence");
    return localData ? JSON.parse(localData) : [];
  };

  const [data, setData] = useState(getLocaleStorageData);
  const title = useRef();
  const amount = useRef();
  const date = useRef();

  useEffect(() => {
    localStorage.setItem("addExpence", JSON.stringify(data));
  }, [data]);

  // form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    const titleData = title.current.value;
    const amountData = amount.current.value;
    const dateData = date.current.value;
    const allData = {
      title: titleData,
      amount: amountData,
      date: dateData,
    };
    setData([...data, allData]);
  };

  return (
    <div
      className={twMerge(
        "min-h-screen flex flex-col justify-center sm:px-6 lg:px-8 bg-gray-100"
      )}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md  ">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add Expense
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Fill in the details to add a new expense to your tracker.
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  ref={title}
                  id="title"
                  name="title"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter expense title"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <div className="mt-1">
                <input
                  ref={amount}
                  id="amount"
                  name="amount"
                  type="number"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <div className="mt-1">
                <input
                  ref={date}
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex space-x-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Expense
              </button>
              <Link to={"/"} className="w-full">
                <button
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md  text-black"
                >
                  Home
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OperationModel;
