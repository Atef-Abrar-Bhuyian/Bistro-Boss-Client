import React from "react";
import ReactHelmet from "../../components/ReactHelmet/ReactHelmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <ReactHelmet title={"Menu"}></ReactHelmet>
      {/* Main Cover */}
      <Cover
        img={menuImg}
        title={"Our Menu"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* Today's Offered section */}
      <SectionTitle
        subHeading={"Dont Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/*  */}
    </div>
  );
};

export default Menu;
