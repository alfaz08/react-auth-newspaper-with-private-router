import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
const Login = () => {
   const navigate= useNavigate()
   const location=useLocation()
   console.log('location in log in',location);
   const {signIn} = useContext(AuthContext)

  const handleLogin=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(res=>{console.log(res.user)
     navigate(location?.state?location.state:'/')
    })
    .catch(error=>console.log(error))

  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
      <h2 className="text-2xl my-10 text-center font-extrabold">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Dont have an account
        <Link to="/register"  className="font-bold text-blue-600"> Register</Link>
      </p>
      </div>
      


      
    </div>
  );
};

export default Login;