'use client'
import React, {FormEvent, useState} from 'react';
const MessageInput = (): JSX.Element => {
    const [inputText, setInputText] = useState<string>('')

    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputText) return;

        console.log(inputText);

        // message sent

        // clear input

        setInputText('');
    }

    return (
        <form onSubmit={sendMessage} className='fixed bottom-0 w-full flex items-center py-5 px-10'>
            <input onChange={(e) => setInputText(e.target.value)} value={inputText} className='flex-1 disabled:opacity-30 border focus:ring-2 rounded focus:ring-blue-300 focus:outline-none border-blue-900 px-5 py-3 mr-2' placeholder='Message...' type="text"/>
            <button disabled={!inputText} type='submit' className='disabled:cursor-not-allowed bg-blue-500 py-3 px-6 text-white rounded-sm h-full uppercase tracking-wider '>Send</button>
        </form>
    );
};

export default MessageInput;
