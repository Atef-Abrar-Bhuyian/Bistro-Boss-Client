import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ReactHelmet from "../../components/ReactHelmet/ReactHelmet";
import signUpImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <ReactHelmet title={"Sign Up"}></ReactHelmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0  shadow-md shadow-[#c7a169]">
          <h1 className="text-center p-4 text-xl md:text-3xl font-bold">
            Sign Up Now!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo")}
                name="photo"
                placeholder="Photo URL Link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p className="m-4 text-center">
            <small>
              Already Have an Account?{" "}
              <Link className="text-[#c7a169] font-bold" to={"/login"}>
                Login Now
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
