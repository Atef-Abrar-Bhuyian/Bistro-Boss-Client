import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import loginImg from "../../assets/others/authentication2.png";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisbaled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    let user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisbaled (false);
    } else {
        setDisbaled(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col md:flex-row gap-8">
        <div className="text-center md:w-1/2">
          <img src={loginImg} alt="login image" />
        </div>
        <div className="card bg-base-100 md:w-1/2 w-full shrink-0  shadow-md shadow-[#c7a169]">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-xl md:text-3xl font-bold text-center">
              Login now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplateNoReload />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type The Captcha Above"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-4"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn bg-[#D1A054] bg-opacity-70 text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
