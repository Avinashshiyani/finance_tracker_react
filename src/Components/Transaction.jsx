import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Transaction = () => {
  let getLocalStorageData = () => {
    const localData = localStorage.getItem("addExpence");
    return localData ? JSON.parse(localData) : [];
  };

  const [data, setData] = useState(getLocalStorageData);

  const handleDelete = (index) => {
    const updateData = data.filter((_, id) => id !== index);
    setData(updateData);
    console.log(updateData);
  };

  useEffect(() => {
    localStorage.setItem("addExpence", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <>
        <section className="py-1  px-10 mt-[22px]">
          <div className="w-full  mb-12 xl:mb-0  mx-auto  ">
            <div className="relative flex flex-col min-w-0 rounded-[14px] border-[1px]  border-gray-300 px-[24px] break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0  py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative grid w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-[18px]">
                      Last transactions
                    </h3>
                    <span>Check your last transactions</span>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr className="bg-gray-100">
                      {TableHead.map((e, index) => (
                        <th
                          key={index}
                          className="px-6  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        >
                          {e}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((e, index) => (
                      <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          {e.title}
                        </th>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          Exp
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {e.date}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          ${e.amount}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-2">
                          <button
                            onClick={() => handleDelete(index)}
                            className="border-1 bg-red-500 text-white px-4 py-2 rounded-[4px] hover:bg-red-600"
                          >
                            Delete
                          </button>
                          <button className="border-1 bg-blue-500 text-white px-4 py-2 rounded-[4px] hover:bg-blue-600">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
let TableHead = ["Description", "Type", "Date", "Amount", "Operations"];
export default Transaction;
