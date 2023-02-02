import RoutesNavigate from "./routes.routes";
import { BrowserRouter } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <RoutesNavigate />
    </BrowserRouter>
  );
};

export default AuthRoutes;
