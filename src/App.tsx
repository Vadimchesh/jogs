import { FC, useEffect } from "react";

import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
  const { setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  });

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
