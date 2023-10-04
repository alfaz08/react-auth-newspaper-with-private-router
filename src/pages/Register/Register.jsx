import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
import { ToastContainer,toast } from "react-toastify";


import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {
  const {createUser} =useContext(AuthContext)
    const [registerError,setRegisterError] =useState('')
    const [registerSuccess,setRegisterSuccess] =useState('')
    const [showPassword,setShowPassword] = useState(false)
   


  const handleRegister=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    
   
     
  
   
    //reset error
     setRegisterError('')
     setRegisterSuccess('')
    
    

    createUser(email,password)
   .then(res=>{
    console.log(res.user)
    setRegisterSuccess(res.user)
    toast.success('user created successfully')
    e.target.reset();


    //update profile
   updateProfile(res.user,{
    displayName:name,
   })
   .then(()=>console.log('profile updated'))
   .catch()

    // //send verification email
    // sendEmailVerification(res.user)
    // .then(()=>{
    //   alert('please check your email and verify your account')
    // })
   })
   .catch(error=>
    {
      console.log(error)
      setRegisterError(error.message)
      toast.error(error.message)
      e.target.reset();
    })

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
          <div className="flex items-center">
         <div className="">
         <input type={showPassword ? "text":"password"}
           name="password" required 
           placeholder="password"
            className="input input-bordered" />
         </div>
         <div>
         <span onClick={()=>setShowPassword(!showPassword)} className="label-text">Show</span>
         </div>
          </div>
  
         

        </div>
       <div className=" mt-4 mb-4">
       <input type="checkbox" name="terms" id="terms" />
         <label className="ml-2" htmlFor="terms" >Accept our Terms and Conditions</label>
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
    {
        registerError && <ToastContainer></ToastContainer>

      }
      {
        registerSuccess && <ToastContainer></ToastContainer>

      }
    </div>
  );
};

export default Register;