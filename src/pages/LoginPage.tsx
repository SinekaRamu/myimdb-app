import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import SignupForm from "../components/SignupForm";
import { IUserData, IShowError } from "../type";
import { useState } from "react";
import Model from "../components/Model";
import { addUser } from "../services/api";

const LoginPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });

  const handleLogin = async (u: IUserData) => {
    try {
      const userPayload = {
        userName: u.userName,
        password: u.password,
      };
      await addUser(userPayload);
      setShowModalMsg({
        action: "Succes",
        msg: "Movie successfully Added",
      });
    } catch (error) {
      if (error instanceof Error) {
        setShowModalMsg({
          action: "Failed",
          msg: error.message,
        });
      }
    } finally {
      setShowModal(true);
    }
  };
  return (
    <>
      <Layout title="Login">
        <div className="form-cover">
          <h2>Log In</h2>
          <SignupForm />
          <p> or</p>
          <Link to="/signup">Create a New account</Link>
        </div>
      </Layout>
      {showModal && <Model showModalMsg={showModalMsg} />}
    </>
  );
};

export default LoginPage;
