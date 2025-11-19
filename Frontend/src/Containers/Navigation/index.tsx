import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import images from "../../types/images";
import { GradientButton } from "../../Components/GradientButton";
import { DarkButton } from "../../Components/DarkButton";
import { IoIosClose, IoIosMenu } from "react-icons/io";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation(); // <-- Detect active route
  const [showmenu, setShowMenu] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path ? "text-primary font-semibold" : "text-white";

  return (
    <div>
      {/* NAVBAR */}
      <nav className="bg-black/80 w-full p-4 flex items-center justify-between backdrop-blur fixed top-0 left-0 z-50">
        <Link to="/" className="flex gap-x-2 items-center">
          <div className="md:w-12 sm:w-9 w-6">
            <img src={images.logo} alt="logo" className="w-full" />
          </div>
          <p className="text-white font-bold text-xl">Mutumbu</p>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="md:flex md:gap-x-10 hidden">
          <Link className={isActive("/marketplace")} to="/marketplace">
            Marketplace
          </Link>
          <Link className={isActive("/dashboard")} to="/dashboard">
            Dashboard
          </Link>
          <Link className={isActive("/aitools")} to="/aitools">
            AI Tools
          </Link>
          <Link className={isActive("/profile")} to="/profile">
            Profile
          </Link>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="md:flex md:gap-x-3 hidden">
          <DarkButton title="Sign In" onClick={() => navigate("/auth/signin")} />
          <GradientButton
            className="bg-primary_gradient"
            title="Get Started"
            onClick={() => navigate("/auth/signup")}
          />
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden block">
          <IoIosMenu
            className="text-primary"
            size={30}
            onClick={() => setShowMenu(true)}
          />
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      {showmenu && (
        <div className="absolute bg-tertiary top-0 right-0 h-full w-[70%] z-50">
          <div className="relative">
            <IoIosClose
              className="text-primary absolute right-2 top-2"
              size={30}
              onClick={() => setShowMenu(false)}
            />
          </div>

          <ul className="text-white flex flex-col items-center gap-y-6 px-2 mt-10">
            <Link
              className={isActive("/marketplace")}
              to="/marketplace"
              onClick={() => setShowMenu(false)}
            >
              Marketplace
            </Link>
            <Link
              className={isActive("/dashboard")}
              to="/dashboard"
              onClick={() => setShowMenu(false)}
            >
              Dashboard
            </Link>
            <Link
              className={isActive("/aitools")}
              to="/aitools"
              onClick={() => setShowMenu(false)}
            >
              AI Tools
            </Link>
            <Link
              className={isActive("/profile")}
              to="/profile"
              onClick={() => setShowMenu(false)}
            >
              Profile
            </Link>
          </ul>

          <div className="flex flex-col p-3 gap-y-2">
            <DarkButton
              title="Sign In"
              onClick={() => {
                navigate("/auth/signin");
                setShowMenu(false);
              }}
            />
            <GradientButton
              className="bg-primary_gradient"
              title="Get Started"
              onClick={() => {
                navigate("/auth/signup");
                setShowMenu(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
