import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage";
import Home from "./pages/HomePage";
import PrivateRoutes from "./services/PrivateRoutes";
const Signup = lazy(() => import("./pages/SignupPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const Account = lazy(() => import("./pages/ViewAccountPage"));
const ChangePassword = lazy(() => import("./pages/ChangePasswordPage"));
const ForgetPassword = lazy(() => import("./pages/forgetPasswordPage"));
const AddMovie = lazy(() => import("./pages/AddMoviePage"));
const Movie = lazy(() => import("./pages/MoviePage"));
const AddRating = lazy(() => import("./pages/AddRating"));

function App() {
  return (
    <Suspense fallback={<>Loading..</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/u/account" element={<Account />} />
            <Route path="/user/changePassword" element={<ChangePassword />} />
            <Route path="/addMovie" element={<AddMovie />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/movies/:id/rating" element={<AddRating />} />
          </Route>
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
