import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";

const Register = () => {
  const {createUser} =useContext(AuthContext)
  
  const handleRegister=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password,name,photo);


    createUser(email,password)
   .then(res=>console.log(res.user))
   .catch(error=>console.log(error))

    }
  

  


  return (
    <div>
       <div>
      <Navbar></Navbar>
      <div className="">
      <h2 className="text-2xl my-10 text-center font-extrabold">Please Register</h2>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" required placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">Already Have an account
        <Link to="/login" className="font-bold text-blue-600"> Login</Link>
      </p>
      </div>
      


      
    </div>
    </div>
  );
};

export default Register;