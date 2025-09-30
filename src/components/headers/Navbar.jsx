import React from "react";
import { Link, Links } from "react-router-dom";
import { Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import  {MyContext}  from "../../Context/MyContext"; 
import { useContext } from "react";


const Navbar = () => {
   const context = useContext(MyContext);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      vertical: "top",
      horizontal: "right",
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <div>
    <div className="flex items-center  justify-between">
      <div className="col1 mx-10 w-[20%]">
        <Link to={"/"}>
          <img className="w-35" src="/nuravi 2.png" alt="Nuravi Logo" />
        </Link>
      </div>
      <div className="col2 w-[50%] p-2">
        <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
          <input
            type="text"
            placeholder="Search for product"
            className="w-full h-[35px] focus:outline-none bg-inherit px-2 text-[15px] "
          />
          <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
            <CiSearch className="text-black text-[22 px] " />
          </Button>
        </div>
      </div>
      <div className="col3 w-[30%] flex items-center pr-7">
        <ul className="flex items-center justify-end w-full justif gap-3">
          <li className="list-none">
            <Link
              to="/login"
              className="link transition text-[15px] font-[500]"
            >
              Login
            </Link>{" "}
            | &nbsp;
            <Link
              to="/register"
              className="link transition text-[15px] font-[500]"
            >
              Register
            </Link>
          </li>

           <li>
            <Tooltip title="whishlist">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={1} color="secondary">
                <FaRegHeart className="text-[20px]" />
              </StyledBadge>
            </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Cart">
            <IconButton onClick={()=>context.setOpenCart(true)} aria-label="cart">
              <StyledBadge badgeContent={1} color="secondary">
                <MdOutlineShoppingCart className="text-[20px]" />
              </StyledBadge>
            </IconButton>
            </Tooltip>
          </li>
         
        </ul>
      </div>
    </div>
    <Navigation/>
    </div>
  );
};

export default Navbar;
