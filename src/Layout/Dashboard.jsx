import React from "react";
import {
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { MdEmail, MdOutlineRestaurantMenu } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-20">
      {/* Dashboard Side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 gap-3 text-white">
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/dashboard/userHome"}>
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/dashboard/review"}>
              <FaStar></FaStar>
              Review
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/dashboard/bookings"}>
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>

          <div className="divider before:bg-neutral after:bg-neutral"></div>

          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/menu"}>
              <RiMenu5Fill />
              Menu
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/order/salad"}>
              <MdOutlineRestaurantMenu />
              Order
            </NavLink>
          </li>
          <li className="hover:bg-neutral rounded-lg">
            <NavLink to={"/contact"}>
            <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 justify-center items-center flex flex-col gap-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
