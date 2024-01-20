import React, { useState } from "react";
import MyContext from "./myContext";
import { toast } from "react-toastify";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };




  

  // const [user, setUser] = useState([]);

  // const getUserData = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await getDocs(collection(fireDB, "users"));
  //     const usersArray = [];
  //     result.forEach((doc) => {
  //       usersArray.push(doc.data());
  //       setLoading(false);
  //     });
  //     setUser(usersArray);
  //     console.log(usersArray);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };


  

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
      
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
