import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <Layout title="Sign Up">
      <div className="form-cover">
        <h2>Sign Up</h2>
        <SignupForm />
        <p> or</p>
        <Link to="/login">Existing User</Link>
      </div>
    </Layout>
  );
};

export default SignupPage;
