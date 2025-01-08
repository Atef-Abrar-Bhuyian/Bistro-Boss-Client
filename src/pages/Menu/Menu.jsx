import React from 'react';
import ReactHelmet from '../../components/ReactHelmet/ReactHelmet';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <ReactHelmet title={"Menu"} ></ReactHelmet>
            <Cover img={menuImg} title={"Our Menu"} description={"Would you like to try a dish?"}></Cover>     
            
        </div>
    );
};

export default Menu;