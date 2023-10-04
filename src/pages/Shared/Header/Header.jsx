import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
  return (
    <div className='text-center'>
      <img className='mx-auto mt-4' src={logo} alt="logo" />
      <p className='mt-2'>Journalism Without Fear or Favour</p>
      <p className='text-xl mt-2'>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </p>
    </div>
  );
};

export default Header;