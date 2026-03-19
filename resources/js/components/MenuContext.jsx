import { router, Link } from '@inertiajs/react';
import React from 'react';

const MenuContext = () => {
    return (
        <div className="container mx-auto px-4 py-8 pt-10">
            <div className="dark:bg-[#212121] bg-white w-[75vw] md:w-[45vw] rounded-[18px] shadow-md dark:text-white text-black mx-auto mb-4">
                <div className='max-w-md mx-auto h-[100px] rounded-lg p-6 '>
                                    <Link
                    href="/" 
                    className="text-black dark:text-white [caret-color:transparent]"
                >
                    Back
                </Link>
                    </div> 
            </div>

            <div className="dark:bg-[#212121] bg-white w-[75vw] md:w-[45vw] rounded-[18px] shadow-md dark:text-white text-black mx-auto mb-4">
                    <div className='max-w-md mx-auto h-[400px] rounded-lg p-6'>
    <Link href="/" className="block text-black dark:text-white [caret-color:transparent] py-2">Settings</Link>
    <Link href="/" className="block text-black dark:text-white [caret-color:transparent] py-2">Share</Link>
    <Link href="/" className="block text-black dark:text-white [caret-color:transparent] py-2">Rate</Link>
    <Link href="/" className="block text-black dark:text-white [caret-color:transparent] py-2">Support</Link>
    <Link href="/" className="block text-black dark:text-white [caret-color:transparent] py-2">About</Link>
                </div>
            </div>

            <div className="dark:bg-[#212121] bg-white w-[75vw] md:w-[45vw] rounded-[18px] shadow-md dark:text-white text-black mx-auto">
                <div className='max-w-md mx-auto h-[100px] rounded-lg p-6 '>
                   <Link href="/" className="block text-black dark:text-white [caret-color:transparent]">Create backup</Link>
                    <Link href="/" className="block text-black dark:text-white [caret-color:transparent]">Restore data</Link>  
                    </div> 
            </div>
        </div>
    );
};

export default MenuContext;