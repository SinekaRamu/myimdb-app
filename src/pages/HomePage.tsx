import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout title="My iMDb">
      <h1>Welcome</h1>
      <Link to="/">home!</Link>
    </Layout>
  );
};

export default HomePage;
