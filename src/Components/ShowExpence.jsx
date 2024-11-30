import React, { useEffect, useState } from "react";

const ShowExpence = () => {
  const getLocaleStorageData = () => {
    const localData = localStorage.getItem("addExpence");
    return localData ? JSON.parse(localData) : [];
  };
  const [data] = useState(getLocaleStorageData);
  let expenceData = data.map((e) => Number(e.amount));
  let totalExpence = expenceData.reduce((acc, crr) => acc + crr, 0);
  return totalExpence;
};
export default ShowExpence;
