import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import MenuContext from '@/components/MenuContext';

const Menu = ({}) => {
return (    <>
    <h1 className="text-red-500 text-5xl hover:text-blue-500">This will be a new menu</h1>
    <ThemeToggle></ThemeToggle>
    <MenuContext></MenuContext>
    </>)
}

export default Menu;