'use client'
import React, {FormEvent, useState} from 'react';
import {v4 as uuid} from 'uuid';
import {Message} from "../../../typings";
import axios from "axios";
const MessageInput = (): JSX.Element => {
    const [inputText, setInputText] = useState<string>('')

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputText) return;

        const messageBody: Message = {
            id: uuid(),
            message: inputText,
            username: 'Szymon',
            profilePictureUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F49917726%2Fretrieving-default-image-all-url-profile-picture-from-facebook-graph-api&psig=AOvVaw0HhUM54IFlJnXDMlkScPQ9&ust=1678964275158000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjtgLvj3f0CFQAAAAAdAAAAABAE',
            createdAt: Date.now(),
            email: 'test@gmail.com'
        }

        const uploadMessageToBe = async () => {
            return await axios.post('/api/hello', {
                message: messageBody
            });
        }

        try {
            await uploadMessageToBe();
            setInputText('');
        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    return (
        <form onSubmit={sendMessage} className='fixed bottom-0 w-full flex items-center py-5 px-10'>
            <input onChange={(e) => setInputText(e.target.value)} value={inputText}
                   className='flex-1 disabled:opacity-30 border focus:ring-2 rounded focus:ring-blue-300 focus:outline-none border-blue-900 px-5 py-3 mr-2'
                   placeholder='Message...' type="text"/>
            <button disabled={!inputText} type='submit'
                    className='disabled:cursor-not-allowed bg-blue-500 py-3 px-6 text-white rounded-sm h-full uppercase tracking-wider '>Send
            </button>
        </form>
    );
};

export default MessageInput;
