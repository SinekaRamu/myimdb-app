import { useState } from "react";
// import { IUserData } from "../type";
import FormInputs from "./FormInput";
import Loading from "./Loading";
// import FormButtons from "./FormButtons";
// interface IForm {
//   addUser?: (u: IUserData) => void;
//   getUser?: IUserData;
// }

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  //   const [user, setUser] = useState<IUserData>();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(name, value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("sumbitted");
    setIsLoading(true);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <>
        <div className="form-input">
          <FormInputs
            label="Enter Email ID"
            type="email"
            name="email"
            // value={}
            handleChange={handleChange}
          />
          <FormInputs
            label="Enter your password"
            type="password"
            name="password"
            min="8"
            max="20"
            // value={movie.year}
            handleChange={handleChange}
          />
        </div>
        <button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading && <Loading />}
          <>Login</>
        </button>
      </>
    </form>
  );
};

export default SignupForm;
