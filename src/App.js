import React from "react";
import AppRouting from "./components/UI/AppRouting";
import "./App.css";
import { UserArrayProvider } from "./context/UserDataContext";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <UserArrayProvider>
      <AppRouting />
    </UserArrayProvider>
  );
}

export default App;
