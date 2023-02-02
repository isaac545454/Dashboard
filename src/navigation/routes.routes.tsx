import { Routes, Route } from "react-router-dom";
import Dashbord from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";
import { ROUTES } from "./FILEROUTES";

const RoutesNavigate = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path={ROUTES.deshboard} element={<Dashbord />} />
        <Route path={ROUTES.list(":type")} element={<List />} />
      </Routes>
    </Layout>
  );
};

export default RoutesNavigate;
