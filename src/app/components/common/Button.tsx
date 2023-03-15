'use client'

import React from 'react';

const ButtonForLoggingOut = () => {
    return (
        <button
            onClick={() => console.log('cklic')}
            className='bg-blue-500 py-2 px-4 rounded-md text-white shadow-2xl'>
            Logout
        </button>
    );
};

export default ButtonForLoggingOut;
