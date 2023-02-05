import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import { ROUTES } from "./FILEROUTES";

const auth = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.login} element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default auth;
