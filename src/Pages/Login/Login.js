/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import authBgImage from '../../Assets/others/authentication.png';
import authentication2 from '../../Assets/others/authentication2.png';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { AuthContext } from '../../Providers/AuthProvider';
import './Login.css';
const Login = () => {
  const [disable, setDisable] = useState(true);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.email.value;
    const password = form.password.value;
    // console.log({ name, password });
    signIn(name, password)
      .then((result) => {
        //   console.log(result.user);
        toast.success('User login successfully');
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <Helmet>
        <title>Regal Dragon | Login</title>
      </Helmet>

      <div style={{ backgroundImage: `url(${authBgImage})` }} className="p-24 bg-base-200 ">
        <div className="p-8 lg:flex lg:flex-row justify-center items-center border-x-4 border-y-4  shadow-lg">
          <div className="lg:w-1/2">
            <img src={authentication2} alt="" />
          </div>
          <div className="card  lg:w-2/5 ">
            <form onSubmit={handleSubmit} className="card-body">
              <h3 className="text-2xl font-bold text-center">Login </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
                />
              </div>
              <div className="form-control">
                <label className="input input-bordered  mt-6">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type Here"
                  className="mt-10 input input-bordered"
                />
              </div>

              <div className="form-control mt-3">
                <input
                  disabled={disable}
                  className="btn text-white bg-orange-300 hover:bg-orange-300"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center mt-3">
              <Link className="text-orange-300 hover:underline" to={'/signup'}>
                Now Here ? Create a New Account
              </Link>
              <p>Or sign in with</p>
            </div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
