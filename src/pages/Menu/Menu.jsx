import React from "react";
import ReactHelmet from "../../components/ReactHelmet/ReactHelmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
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
      {/* dessert item section */}
      <MenuCategory
      items={desserts}
      heading={"DESSERTS"}
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      coverImg={dessertImg}
      ></MenuCategory>

    </div>
  );
};

export default Menu;
