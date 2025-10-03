import React from "react";
import MyAccoSideBar from "../components/MyAccoSideBar";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const MyOrders = () => {
  return (
    <section className="min-h-screen py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <MyAccoSideBar />
        </div>

        <div className="col2  w-[80%] ">
          <div className=" bg-gray-200 shadow-md rounded-md">
            <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2> My Orders</h2>
              <p className="mt-0 mb-2">
                Only <span className="font-bold text-red-600">2</span> products
                you have Ordered
              </p>
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-200">
                <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-gray-200 dark:text-black">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-gray-200 text-white cursor-pointer">
                        <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                      </Button>
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      OrderId
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      PaymentId
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      PinCode
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Total Amount
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      UserId
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Orders Status
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-black border-b dark:bg-gray-200 dark:border-gray-200 border-gray-200">
                    <td className="px-6 py-4 font-[500]">&nbsp;</td>
                    <td className="px-6 py-4 font-[500]">
                        <span className="text-red-500">
                        1367262g2yg2t72
                        </span>
                        </td>
                    <td className="px-6 py-4 font-[500]"><span className="text-red-500">
                        khsje2226ghgcd73
                        </span></td>
                    <td className="px-6 py-4 font-[500]">Naushir</td>
                    <td className="px-6 py-4 font-[500]">863626388</td>
                    <td className="px-6 py-4 font-[500]">
                        <span className="block w-[250px]">6b street banglore 221939183jdushw jnjsnxsx sxjnsn</span>
                    </td>
                    <td className="px-6 py-4 font-[500]">560045</td>
                    <td className="px-6 py-4 font-[500]">Rs.53000</td>
                    <td className="px-6 py-4 font-[500]">naushirmdh786</td>
                    <td className="px-6 py-4 font-[500]">
                         <span className="text-red-500">
                        naushir116318378sqh
                        </span>
                    </td>
                    <td className="px-6 py-4 font-[500]">Pending</td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                       26-01-2026
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
