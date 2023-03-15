import React from 'react';
import {ChatBubbleBottomCenterIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import ButtonForLoggingOut from "@/app/components/common/Button";
const Header = () => {
    const session = true;

    if (session) {
        return (
            <header className='flex justify-between font-secondary items-center sticky top-0  z-50 bg-white p-10 shadow-sm'>
                <div className='flex items-center'>
                    <ChatBubbleBottomCenterIcon className='text-blue-900' width={60} height={60}/>
                    <div className='flex flex-col items-center'>
                        <div className='ml-2'>
                            <p className='italic'>Nice to see you: </p>
                            <p className='font-bold'>Szymon J.</p>
                        </div>
                    </div>
                </div>
               <ButtonForLoggingOut/>
            </header>
        )
    }

    return (
        <header className='flex font-secondary justify-center items-center sticky top-0  z-50 bg-white p-10 shadow-sm'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex items-center space-x-2 '>
                    <ChatBubbleBottomCenterIcon className='text-blue-900' width={60} height={30}/>
                    <h2 className='text-blue-500 font-bold text-xl underline underline-offset-4'>Welcome on TextMe</h2>
                </div>
                <Link className='bg-blue-500 py-2 px-4 rounded-md text-white shadow-2xl' href='/sign-in'>
                    Sign In
                </Link>
            </div>
        </header>
    );
};

export default Header;
