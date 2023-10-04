import { FaGoogle,FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
       
        <button className="btn btn-outline w-full">
       <FaGoogle></FaGoogle> Login With Google
      </button>
        <button className="btn btn-outline w-full">
       <FaGithub></FaGithub> Login With Github
      </button>
      </div>

      <div className="p-4 mb-6 ">
        <h2 className="text-3xl mb-4">Find us on</h2>

       <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
       <FaFacebookF className="mr-3" ></FaFacebookF> Facebook
       </a>
       <a href="" className="p-4 flex text-lg items-center border-x">
       <FaTwitter className="mr-3"></FaTwitter> Twitter
       </a>
       <a href="" className="p-4 flex text-lg items-center border rounded-b-lg">
       <FaInstagram className="mr-3"></FaInstagram > Instagram
       </a>


       {/* q zone */}
        
       <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
       
      </div>

        
      </div>


    </div>
  );
};

export default RightSideNav;