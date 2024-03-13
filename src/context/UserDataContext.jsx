import React from "react";
import axios from "axios";

export const UserArrayContext = React.createContext(null);

export function UserArrayProvider({initialArray = [], children}) {
  const [userData, setUserData] = React.useState(initialArray);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUserData(result.data);
    });
  }, [setUserData]);

  const updateUserByIndex = (user, index) => {
    setUserData((prev) => {
      const next = [...prev];
      next[index] = user;
      return next;
    });
  };

  return (
    <UserArrayContext.Provider value={{userData, userDataLength: userData.length, setUserData, updateUserByIndex}}>
      {children}
    </UserArrayContext.Provider>
  );
}
