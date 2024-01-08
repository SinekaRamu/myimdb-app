import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { IShowError } from "../type";
import { useState } from "react";
import { forgetPasswordApi } from "../services/api";
import Modal from "../components/Model";
import PasswordForm from "../components/PasswordForm";

const ForgetPasswordPage = () => {
  const [showModel, setShowModel] = useState<IShowError>();
  const [message, setMessage] = useState("");

  const handleMail = async (emailId: string) => {
    try {
      if (emailId) {
        const res = await forgetPasswordApi({ email: emailId });
        setShowModel({ action: "success", msg: res.data.message });
      }
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <Layout title="forgetPassword">
      <h2>Forget Password</h2>
      <PasswordForm type="Send email" sendMail={handleMail} />
      {message && <p className="error">{message}</p>}
      <Link to="/">Go back to home?</Link>
      {showModel && <Modal showModalMsg={showModel} />}
    </Layout>
  );
};

export default ForgetPasswordPage;
