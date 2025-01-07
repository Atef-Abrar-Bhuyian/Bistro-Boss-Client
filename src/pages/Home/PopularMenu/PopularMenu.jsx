import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import ButtonWithBottomBorder from "../../../components/ButtonWithBottomBorder/ButtonWithBottomBorder";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div  className="grid md:grid-cols-2 gap-8">
      {menu.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
      </div>
      <div className="flex items-center justify-center my-8">
      <ButtonWithBottomBorder content={"View Full Menu"}></ButtonWithBottomBorder>
      </div>
    </section>
  );
};

export default PopularMenu;
