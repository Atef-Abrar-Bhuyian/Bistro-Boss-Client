import React from 'react';
import ReactHelmet from '../../components/ReactHelmet/ReactHelmet';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <ReactHelmet title={"Menu"} ></ReactHelmet>
            <Cover img={menuImg} title={"Our Menu"} description={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} ></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;