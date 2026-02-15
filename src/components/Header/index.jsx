import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center container-primary">
          <div className="flex justify-between items-center gap-13">
            <div>
              <p className="font-bold text-xl ">Exclusive</p>
            </div>
            <div className="hidden md:flex justify-between items-center gap-8">
              <p>Home</p>
              <p>Contact</p>
              <p>About</p>
              <p>Signup</p>
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center gap-3">
            <div>
              <input type="search" className="border-2" />
              <SearchIcon />
            </div>
            <FavoriteBorderIcon />
            <ShoppingCartIcon />
          </div>
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </div>
    </>
  );
}
