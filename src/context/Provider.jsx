import { createContext, useState } from "react";

export const AppContext = createContext();

function Provider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [bagIconNum, setBagIconNum] = useState(5);
  const [searchKey, setSearchKey] = useState("");

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        bagIconNum,
        setBagIconNum,
        searchKey,
        setSearchKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
