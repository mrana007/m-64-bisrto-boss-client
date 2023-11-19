import { Link } from "react-router-dom";
import signUpImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'

const SignUp = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl shadow-gray-400">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm ">
        <h1 className="text-5xl text-center pt-6 font-bold">Sign Up</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
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
            </div>
            <div className="form-control mt-6">
            <input className="btn bg-[#D1A054B3] text-white text-xl font-extrabold " type="submit" value="Sign Up" />
            </div>
          </form>
          <p className='text-center pb-6 text-[#D1A054] text-xl font-medium'><small>Already registered? <Link to="/login" className='font-extrabold'>Go to Login</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
