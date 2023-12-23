import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { getUser, updateUser } from "../services/api";
import { useEffect, useState } from "react";
import { IUserData } from "../type";
import UserDataField from "../components/UserDataField";
// import UserForm from "../components/UserForm";

const Account = () => {
  let [user, setUser] = useState<IUserData>({
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  let [update, setupdate] = useState<IUserData>();

  const handleDelete = () => {
    localStorage.setItem("token", "");
  };

  useEffect(() => {
    const viewAccount = async () => {
      try {
        const res = await getUser();
        setUser(res.data);
      } catch (error: any) {
        setMessage(error.message || error.response.data.message);
      }
    };
    viewAccount();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setupdate({ ...user, [name]: value === undefined ? "" : value });
  };

  const handleUpdate = async () => {
    try {
      if (update) {
        console.log(update);
        const res = await updateUser(update);
        setUser(res.data);
      }
    } catch (error: any) {
      console.log(error);
      setMessage(error.response.data.message);
    }
  };

  return (
    <Layout title="view Account">
      {message ? (
        <p className="error">{message}</p>
      ) : (
        <>
          <h2>Welcome, {user.first_name}</h2>
          <div className="account-card">
            <UserDataField
              user={user.first_name}
              type="text"
              label="First Name: "
              name="first_name"
              handleChange={handleChange}
              handleUpdate={handleUpdate}
            />
            <UserDataField
              user={user.last_name}
              type="text"
              label="Last Name: "
              name="last_name"
              handleChange={handleChange}
              handleUpdate={handleUpdate}
            />
            <UserDataField
              user={user.user_name}
              type="text"
              label="User Name: "
              name="user_name"
              handleUpdate={handleUpdate}
              handleChange={handleChange}
            />
            <div className="bottom-line">
              <p>Email ID: </p>
              <span> {user.email}</span>
            </div>
            <button>Change Password</button>
          </div>
        </>
      )}
      <div className="flex-box">
        <Link to="/" role="button">
          Back
        </Link>
        <Link to="/login" role="button" onClick={handleDelete}>
          Logout
        </Link>
      </div>
    </Layout>
  );
};

export default Account;
