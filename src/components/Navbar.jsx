import { BiLogoGithub } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToContactUs = () => {
    const Services = document.getElementById("contactus");
    Services.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="flex w-[100vw] h-[70px] bg-[#18181bea] xl:px-[15rem] py-2 justify-between
     border-b border-gray-700 sticky  top-0 z-50"
    >
      <div className="flex justify-between w-[100vw] px-4 py-2">
        <img
          src="pixlr-image-generator-eea6deeb-44fa-44bd-9375-0eb65a5e68db.png"
          loading="lazy"
          alt="Hubql logo"
          className="h-[50px] rounded-lg"
        ></img>
        <div className="hidden  items-center  xl:flex w-full text-[#C2C2C2]">
          <ul className="hidden  items-center  xl:flex  list-none">
            <li className="px-4 py-2 flex items-center">
              <span className="px-2">Services</span>
            </li>
            <li className="px-4 py-2 flex items-center">
              <span className="px-2">About</span>
            </li>
            <li className="px-4 py-2 flex items-center">
              <span className="px-2">Privacy & Policy</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center w-fit">
          <button
            onClick={scrollToContactUs}
            className="bg-[#FFFF00] text-black px-4 py-2 rounded-md flex w-[7.5rem] hover:bg-blue-600 "
          >
            Contact us
          </button>
          <li className="list-none">
            <i class="fa-solid fa-bars  pt-4 flex  xl:hidden text-2xl pl-4  "></i>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
