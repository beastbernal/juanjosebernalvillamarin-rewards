import React, { useState, useEffect, useMemo, useCallback } from "react";

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

  const refrehUser = useCallback(async () => {
    (async () => {
      setUserData(
        await connectToServer("https://coding-challenge-api.aerolab.co/user/me", "GET")
      );
    })();
  },[])

  const updateHistory = useCallback(async () => {
    (async () => {
      setRecordData(
        await connectToServer("https://coding-challenge-api.aerolab.co/user/history", "GET")
      );
    })();
  },[])

/*************************************************** 
 * funcionalidad de agregar más puntos de canje al usuario. 
 * Considera que la API solo acepta los valores 1000, 5000 o 7500. 
 * Realiza las validaciones pertinentes para manejar casos de errores.
*****************************************************/
  const addPoints = useCallback(async (points) => {
    const result = await connectToServer("https://coding-challenge-api.aerolab.co/user/points", "POST", {'amount': points});
    return result;
  }, []);

  /**
   * Redime un producto enviando su productId
   * Retorna un mensaje de verificación o error
   */
  const redeemProduct = useCallback(async (productId) => {
    const result = await connectToServer("https://coding-challenge-api.aerolab.co/redeem", "POST", {'productId': productId});
    return result;    
  }, []);

  /**
   * Define el provider para enviarlo en el contexto, incluyendo las funciones y objetos globales de la app
   */
  const providerValue = useMemo(
    () => ({
      products,
      userData,
      recordData,
      setUserData,
      refrehUser,
      headers,
      addPoints,
      redeemProduct,
      updateHistory
    }),
    [products, userData, recordData, refrehUser, addPoints, redeemProduct, updateHistory]
  );

  return (
    <AppContext.Provider value={{ providerValue }}>
      {children}
    </AppContext.Provider>
  );
}
