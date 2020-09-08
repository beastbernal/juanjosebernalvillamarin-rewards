import React, { useState, useEffect, useMemo } from "react";

export const AppContext = React.createContext();

const jjToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRkMjYyMzc0MjM1MjAwMWVkOTA5OWMiLCJpYXQiOjE1OTg4OTE1NTV9.PQhZhUEYKTvxQnf2eF47t1cHiOaIbbX0_iM7O4N9i0w";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + jjToken,
};

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
myHeaders.append("Authorization", "Bearer " + jjToken);


export default function AppProvider({ children }) {
  const [products, setProducts] = useState("");
  const [userData, setUserData] = useState("");
  const [recordData, setRecordData] = useState("");

  const connectToServer = async (url, method, body) => {
    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(body), 
      headers: myHeaders,
    });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    (async () => {
      setProducts(
        await connectToServer("https://coding-challenge-api.aerolab.co/products", "GET")
      );
      setUserData(
        await connectToServer("https://coding-challenge-api.aerolab.co/user/me", "GET")
      );
      setRecordData(
        await connectToServer("https://coding-challenge-api.aerolab.co/user/history", "GET")
      );
    })();
  }, []);

  const refrehUser = () => {
    console.log("user");
    (async () => {
      setUserData(
        await connectToServer("https://coding-challenge-api.aerolab.co/user/me", "GET")
      );
    })();
  }

/*************************************************** 
  funcionalidad de agregar más puntos de canje al usuario. 
  Considera que la API solo acepta los valores 1000, 5000 o 7500. 
  Realiza las validaciones pertinentes para manejar casos de errores.
*****************************************************/
  const addPoints = async (points) => {
    console.log('points', points)
    let body = {};
    body.amount = points;
    
    return await connectToServer("https://coding-challenge-api.aerolab.co/user/points", "POST", {'amount': points})
    // (async () => {
    //   setUserData(
    //   );
    //   refrehUser();
    // })();
  }

  const providerValue = useMemo(
    () => ({
      products,
      userData,
      recordData,
      setUserData,
      refrehUser,
      headers,
      addPoints
    }),
    [products, userData, recordData]
  );

  return (
    <AppContext.Provider value={{ providerValue }}>
      {children}
    </AppContext.Provider>
  );
}
