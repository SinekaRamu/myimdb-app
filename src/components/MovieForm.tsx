import { useState } from "react";
import { IMovie } from "../type";
import FormInputs from "./FormInput";
import { Link } from "react-router-dom";
// import FormButtons from "./FormButtons";
interface IForm {
  type: string;
  addingMovie?: (m: IMovie) => void;
  //   getMovie?: IMovie;
}

const MovieForm: React.FC<IForm> = ({ type, addingMovie }) => {
  const [movie, setMovie] = useState<IMovie>({
    image: "",
    title: "",
    story: "",
    language: "",
    year: 0,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value === undefined ? "" : value });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setMovie({ ...movie, image: "" }); // Clear the existing image URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (addingMovie) {
      addingMovie(movie);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-cover">
      <>
        <div className="form-input">
          <label>
            upload image
            <input
              type="file"
              id="avatar"
              name="image"
              accept=".png, .jpeg, .jpg"
              onChange={(e) => handleFileChange(e)}
            />
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                marginBottom: "10px",
                boxShadow: "0 0 5px #fff",
              }}
            />
          )}

          <FormInputs
            label="Enter image url"
            type="text"
            name="image"
            value={movie.image}
            handleChange={handleChange}
          />
          <FormInputs
            label="Enter Movie Title"
            type="text"
            name="title"
            value={movie.title}
            handleChange={handleChange}
          />
          <FormInputs
            label="Enter Movie Description"
            type="text"
            name="story"
            value={movie.story}
            handleChange={handleChange}
          />
          <FormInputs
            label="Enter Languages"
            type="text"
            name="language"
            value={movie.language}
            handleChange={handleChange}
          />
          <FormInputs
            label="Enter Release Year"
            type="number"
            name="year"
            min="1895"
            max="2024"
            value={movie.year}
            handleChange={handleChange}
          />
        </div>
        <div className="flex-box">
          <button type="submit">
            {type == "edit" ? <>update</> : <>Add</>}
          </button>
          <Link to="/" role="button">
            {type == "edit" ? <>Back</> : <>Cancel</>}
          </Link>
        </div>
      </>
    </form>
  );
};

export default MovieForm;
