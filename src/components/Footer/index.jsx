import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#030406]">
        <div className="text-white flex justify-between items-center container-primary p-2">
          <div className="flex flex-col gap-3 justify-center">
            <p className="font-bold text-lg">Exclusive</p>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="flex gap-1 items-center">
              <input type="email" className="border border-white p-0.5" placeholder="Enter your email"/>
              <SendIcon fontSize="small" className="cursor-pointer"/>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <p className="font-bold text-lg">Support</p>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <p className="font-bold text-lg">Account</p>
            <p onClick={() => navigate("/account")} className="cursor-pointer">My Account</p>
            <p onClick={() => navigate("/login")} className="cursor-pointer">Login / Register</p>
            <p onClick={() => navigate("/cart")} className="cursor-pointer">Cart</p>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <p className="font-bold text-lg">Quick Link</p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p onClick={() => navigate("/contact")} className="cursor-pointer">Contact</p>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex flex-col gap-3 justify-center">
              <p className="font-bold text-lg">Download App</p>
              <p>Save $3 with App New User Only</p>
              <p className="cursor-pointer">Google Play</p>
            </div>
            <div className="felx gap-1">
              <InstagramIcon className="cursor-pointer"/>
              <FacebookIcon className="cursor-pointer"/>
              <TwitterIcon className="cursor-pointer"/>
              <LinkedInIcon className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
