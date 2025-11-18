import { Link } from "react-router-dom";
import { useState } from "react";
import images from "../../types/images";
import { GradientButton } from "../../Components/GradientButton";
import { DarkButton } from "../../Components/DarkButton";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [showmenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="bg-black/80 w-full p-4 items-center flex justify-between backdrop-blur">
        <Link to="/" className="flex gap-x-2 items-center">
          <div className="md:w-12 sm:w-9 w-6">
            <img src={images.logo} alt="logo" className="w-full" />
          </div>
          <p className="text-white font-bold text-xl">Mutumbu</p>
        </Link>
        <ul className="md:text-white md:flex md:gap-x-10 hidden">
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/aitools">AI Tools</Link>
          <Link to="/profile">Profile</Link>
        </ul>
        <div className="md:flex md:gap-x-3 hidden">
          <DarkButton title="Sign In" />
          <GradientButton className="bg-primary_gradient" title="Get Started" />
        </div>
        <div className="md:hidden block">
          <IoIosMenu
            className="text-primary"
            size={30}
            onClick={() => setShowMenu(true)}
          />
        </div>
      </nav>
      {showmenu && (
        <div className="absolute bg-tertiary top-0 right-0 h-full w-[70%]">
          <div className="relative">
            <IoIosClose
              className="text-primary absolute right-2 top-2"
              size={30}
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="text-white flex flex-col items-center gap-y-6 px-2 mt-10">
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/aitools">AI Tools</Link>
            <Link to="/profile">Profile</Link>
          </ul>
          <div className="flex flex-col p-3 gap-y-2 ">
            <DarkButton
              title="Sign In"
              onClick={() => navigate("/auth/signin")}
            />
            <GradientButton
              className="bg-primary_gradient"
              title="Get Started"
              onClick={() => navigate("/auth/signup")}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
