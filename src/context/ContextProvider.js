import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

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

const dinoStore = {
  userData: {},
  products: [],
};

export default function AppProvider({ children }) {
  const [products, setProducts] = useState("");
  const [userData, setUserData] = useState("");

  const metodo = async (url, method, body) => {
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
        await metodo("https://coding-challenge-api.aerolab.co/products", "GET")
      );
      setUserData(
        await metodo("https://coding-challenge-api.aerolab.co/user/me", "GET")
      );
    })();
  }, []);

  useEffect(() => {}, []);
  
  // const [userData, setUserData] = useState("");

  const refrehUser = () => {
    console.log("user");
    (async () => {
      setUserData(
        await metodo("https://coding-challenge-api.aerolab.co/user/me", "GET")
      );
    })();
  }

  const addPoints = (points) => {
    console.log('points', points)
    let body = {};
    body.amount = points;
    
    (async () => {
      setUserData(
        await metodo("https://coding-challenge-api.aerolab.co/user/points", "POST", {'amount': points})
      );
      refrehUser();
    })();
  }

  const providerValue = useMemo(
    () => ({
      products,
      setProducts,
      userData,
      setUserData,
      refrehUser,
      headers,
      addPoints
    }),
    [products, userData]
  );

  return (
    <AppContext.Provider value={{ providerValue }}>
      {children}
    </AppContext.Provider>
  );
}
