import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full my-4 h-[60px]  bg-white text-black ">
       <div className=" flex flex-row justify-between w-[100%] h-full rounded-full text-black items-center bg-slate-100 mx-auto font-serif px-10 ">
              <div className="logo">
                <NavLink to="/" className="!sm:hidden logo">
                  <h1 className="text-bold text-xl">FEST</h1>
                </NavLink>
              </div>
              <div className="nav-links gap-x-1 ">
                  <NavLink to="/" className='nav-btn pr-6'>Home</NavLink>
                  <NavLink to="/upcoming" className='nav-btn pr-6'>Upcoming</NavLink>
                  <NavLink to="/upload" className='nav-btn pr-6'>Post</NavLink>
                  <NavLink to="/contact" className='nav-btn '>Contact Us</NavLink>
                 
              </div>  
       </div>
    </div>
  )
};
export default Navbar;
