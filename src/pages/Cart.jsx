import React from "react";
import { Link } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Title from "../components/Title";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { IoBagCheck } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Cart = () => {
  const [sizeanchor, setSizeAnchor] = useState(null);
  const [sizeValue, setSizeValue] = useState("2x6")
  const open = Boolean(sizeanchor);
  const SizehandleClick = (event) => {
    setSizeAnchor(event.currentTarget);
  };
  const SizehandleClose = () => {
    setSizeAnchor(null);
  };
  const handleMenuItemClick = (value) => {
    setSizeValue(value);
    SizehandleClose();
  };

  return (
    <section className="section mt-2">
      <Title text1={"Your Cart"} />
      <div className=" ml-10 w-fullm-4 mb-5 flex">
        <div className="left-part w-[60%] ">
          <p className="mt-0 mb-2">
            There are <span className="font-bold text-red-600">2</span> products
            in your cart
          </p>

          <div className="shadow-md bg-gray-200 rounded-md ">
            <div className="cartItem w-full p-3 flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/products/8122" className="group">
                  <img
                    src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?crop=center&height=187&v=1755761776&width=150"
                    className="w-full group-hover:scale-120 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoMdClose className="rounded-full bg-gray-100 text-[20px] absolute top-[0px] right-[10px]" />
                <div className="text-[14px] w-[95%]">
                  <Link to="/products/8122" className="link">
                    Hewana Shaggy Carpet & Rug
                  </Link>
                </div>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                  className="mt-1"
                />

                <div className="flex items-center gap-1 mt-1 ">
                  <div className="relative">
                    <span onClick={SizehandleClick}  className="flex items-center justify-center font-bold rounded-md bg-[#f1f1f1] text-[11px] font-600 py-1 px-3 cursor-pointer gap-1">
                        Size : {sizeValue}
                     <GoTriangleDown />
                    </span>
                    <Menu
                      id="size-menu"
                      anchorEl={sizeanchor}
                      open={open}
                      onClose={()=>SizehandleClose(null)}
                      slotProps={{
                        list: {
                          "aria-labelledby": "basic-button",
                        },
                      }}
                    >
                      <MenuItem onClick={()=>handleMenuItemClick("2x6")}>2x6</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("3x5")}>3x5</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("4x6")}>4x6</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("5x7")}>5x7</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("6x8")}>6x8</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("6x9")}>6x9</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("7x10")}>7x10</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("8x11")}>8x11</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("9x12")}>9x12</MenuItem>
                      <MenuItem onClick={()=>handleMenuItemClick("12x15")}>12x15</MenuItem>

                    </Menu>
                  </div>

                  <div>
                    <span className="flex items-center justify-center font-bold rounded-md bg-[#f1f1f1] text-[11px]  py-1 px-1 cursor-pointer gap-2">
                        Qty:
                       <input
                     type="number"
                      min="1"
                      defaultValue={1}
                      max={15}
                    className="w-[40px] h-[16px] text-[11px] focus:outline-none   " />
                    </span>
                  </div>
                </div>
                <div className="flex item-center gap-4 mt-3 ">
                  <span className="oldprice text-black font-bold text-[12px]">
                    Rs.17,499
                  </span>
                  <span className="oldprice line-through text-[12px]">
                    Rs.34,998
                  </span>

                  <span className="oldprice text-orange-700 font-bold text-[12px]">
                    50% OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-part items-right w-[40%] py-8 px-6">
          <div className="shadow-md rounded-md bg-gray-200 p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />

            <p className="flex items-center justify-between pt-3">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-[14px] font-bold font-[500] text-gray-600">
                Rs. 2,899.00
              </span>
            </p>

            <p className="flex items-center justify-between pt-2 mt-1 border-b border-[rgba(0,0,0,0.2)]">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="text-[14px] font-bold font-[500] text-gray-600">
                Free
              </span>
            </p>

            <p className="flex items-center justify-between pt-2">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-[14px] font-bold font-[500] text-gray-600 ">
                Rs. 2,899.00
              </span>
            </p>

            <br />
            <Link to='/checkOut'> 
            <Button className="!capitalize !w-full !rounded-md !text-center !text-black !border-2 !bg-gray-400 hover:!bg-red-500 !gap-2">
              <IoBagCheck className="text-[20px]" />
             <span className="text-[17px] "> Checkout</span>
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
