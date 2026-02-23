import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

export default function Banner(){
    const navigate = useNavigate();
    return(
        <>
            <div className='bg-[#000000] text-white flex justify-around items-center container-primary mt-7 mb-5'>
                <div className='flex flex-col justify-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <AppleIcon fontSize='large'/>
                        <p>iPhone 14 Series</p>
                    </div>
                    <p className='text-6xl line-clamp-2 w-xl'>Up to 10% off Voucher</p>
                    <div className='flex items-center gap-1 underline cursor-pointer'>
                        <p onClick={() => navigate("/allproduct")}>Shop Now</p>
                        <ArrowForwardIcon />
                    </div>
                </div>
                <div>
                    <img src="./banner.png" alt="" />
                </div>
            </div>
        </>
    )
}