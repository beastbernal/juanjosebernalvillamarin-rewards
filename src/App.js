import React from "react";
import "./index.css";
import "./styles.css";
import AppProvider from "./context/ContextProvider";


import DinosaurStore from './components/DinosaurStore'

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <DinosaurStore />
      </div>
    </AppProvider>
  );
}
