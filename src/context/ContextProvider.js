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
  // const userData = React.useCallback(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://coding-challenge-api.aerolab.co/user/me",
  //     headers: headers,
  //   })
  //     .then((response) => {
  //       // console.log("user", response.data);
  //       dinoStore.userData = response.data;
  //       setStoreData(dinoStore);
  //       console.log('storeData-1', dinoStore);
  //       productsData();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  // const productsData = React.useCallback(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://coding-challenge-api.aerolab.co/products",
  //     headers: headers,
  //   })
  //     .then((response) => {
  //       // console.log('dinoStore-2', dinoStore);
  //       //dinoStore.products = response.data
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  useEffect(() => {
    async function productsData() {
      fetch("https://coding-challenge-api.aerolab.co/products", {
        method: "GET",
        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("products", data);
          // console.log("storeData - products", storeData);
          // setStoreData({ ...storeData, products: data });
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function userData() {
      fetch("https://coding-challenge-api.aerolab.co/user/me", {
        method: "GET",
        headers: myHeaders,
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("user", data);

          // console.log("storeData - user", storeData);

          // setStoreData({ ...storeData, userData: data });
          // console.log("storeData-userData", storeData);
          setUserData(data);
          productsData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    userData();
  }, []);

  useEffect(() => {
    // async function productsData() {
    //   fetch("https://coding-challenge-api.aerolab.co/products", {
    //     method: 'GET',
    //     headers: myHeaders
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //       console.log("data", data);
    //       setStoreData({...storeData, products: data});
    //       console.log("storeData-prod", storeData);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // productsData();
  }, []);
  // const [libros, setLibros] = useState(listaLibros);
  // const [products, setProducts] = useState(products);
  // const [storeData, setStoreData] = useState({
  //   userData: '',
  //   products: ''
  // });
  const [products, setProducts] = useState("");
  const [userData, setUserData] = useState("");

  const providerValue = useMemo(
    () => ({
      products,
      setProducts,
      userData,
      setUserData,
    }),
    [products, userData]
  );

  return (
    <AppContext.Provider value={{providerValue}}>
      {children}
    </AppContext.Provider>
  );
}
