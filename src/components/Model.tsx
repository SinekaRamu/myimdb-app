import { IShowError } from "../type";
import { Link } from "react-router-dom";
interface IModel {
  showModalMsg: IShowError;
  toggleModel?: () => void;
}

const Model: React.FC<IModel> = ({ showModalMsg, toggleModel }) => {
  return (
    <div className="overlay">
      <dialog open>
        <article className="modal">
          <Link
            to="/"
            className="close-button"
            onClick={toggleModel && (() => toggleModel())}
          >
            x
          </Link>
          <h2>{showModalMsg.action}</h2>
          <p>{showModalMsg.msg}</p>
        </article>
      </dialog>
    </div>
  );
};

export default Model;
