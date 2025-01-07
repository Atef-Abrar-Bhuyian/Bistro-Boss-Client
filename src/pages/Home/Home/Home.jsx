import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import ReactHelmet from "../../../components/ReactHelmet/ReactHelmet";
import BistroSection from "../BistroSection/BistroSection";

const Home = () => {
  return (
    <div>
      <ReactHelmet title={"BistroBoss | Home"}></ReactHelmet>
      <Banner></Banner>
      <Category></Category>
      <BistroSection></BistroSection>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
