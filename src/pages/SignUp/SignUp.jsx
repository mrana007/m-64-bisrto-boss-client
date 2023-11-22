import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic()
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{ 
        // create user entry in the database
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user added to the database');
            reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User created successfully',
          showConfirmButton: false,
          timer: 2000
        });
        navigate('/');
          }
        })      
      })
      .catch(error =>console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div
        className="hero min-h-screen md:pb-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse shadow-xl shadow-gray-400">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={signUpImg} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm ">
            <h1 className="text-5xl text-center pt-3 font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered" />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Enter photo url"
                  className="input input-bordered" />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one uppercase, one lower case, one number
                    and one specials character
                  </span>
                )}
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn bg-[#D1A054B3] text-white text-xl font-extrabold "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-[#D1A054] text-xl font-medium">
              <small>
                Already registered?
                <Link to="/login" className="font-extrabold">
                  Go to Login
                </Link>
              </small>
            </p>
            <div className="my-2 text-center text-xl font-medium">
            <p className="mb-2">Or Sign up with</p>
            <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
