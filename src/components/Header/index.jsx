import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center container-primary">
        <div className="flex justify-between items-center container-primary mt-2">
          <div className="flex justify-between items-center gap-13">
            <div>
              <p className="font-bold text-xl ">Exclusive</p>
            </div>
            <div className="hidden md:flex justify-between items-center gap-8">
              <p className="cursor-pointer" onClick={() => navigate("/")}>Home</p>
              <p className="cursor-pointer" onClick={() => navigate("/contact")}>Contact</p>
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer" onClick={() => navigate("/signup")}>Signup</p>
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center gap-3">
            <div className="bg-[#F5F5F5]">
              <input type="search" className="border-2 border-[#F5F5F5] w-52 placeholder-black p-1" placeholder="what are you looking for?"/>
              <SearchIcon />
            </div>
            <FavoriteBorderIcon />
            <ShoppingCartIcon className="cursor-pointer" onClick={() => navigate("/cart")}/>
          </div>
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </div>
      <hr className="mt-2 text-gray-300"/>
    </>
  );
}
