import { FC, useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
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
