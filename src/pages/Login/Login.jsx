import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import signInImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const {signIn} = useContext(AuthContext);

    useEffect( () =>{
        loadCaptchaEnginge(6);
    },[]);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
    }

    const handleValidateCaptcha = () =>{
      const user_captcha_value =captchaRef.current.value;
      if(validateCaptcha(user_captcha_value)){
          setDisabled(false);
      }
      else{
        setDisabled(true);
      }
    }

  return (
    <>
    <Helmet>
        <title>Bistro Boss | Login</title>
    </Helmet>
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="hero-content flex-col md:flex-row shadow-xl shadow-gray-400">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={signInImg} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm">
        <h1 className="text-5xl text-center pt-6 font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
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
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the captcha below"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs w-1/4 border-orange-400 justify-start uppercase'>Validate</button>
              <label className="label">
              <LoadCanvasTemplate />
              </label>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn bg-[#D1A054B3] text-white text-xl font-extrabold " type="submit" value="Login" />
            </div>
          </form>
          <p className='text-center pb-6 text-[#D1A054] text-xl font-medium'><small>New here? <Link to="/signup" className='font-extrabold'>Create a New Account</Link></small></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
