import { FC, useEffect } from "react";
import { useActions } from "./hooks/useActions";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";

const App: FC = () => {
  const { setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
