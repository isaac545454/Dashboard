import RoutesNavigate from "./routes.routes";
import { BrowserRouter } from "react-router-dom";
import Login from "./auth.routes";
import { useAuth } from "../hooks/Auth";

const AuthRoutes = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>{logged ? <RoutesNavigate /> : <Login />}</BrowserRouter>
  );
};

export default AuthRoutes;
