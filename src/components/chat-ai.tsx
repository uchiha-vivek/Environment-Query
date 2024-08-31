import { FC, useState } from "react";
import axios from 'axios';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const Chat: FC = () => {
    const [input, setInput] = useState<string>('');
    const [message, setMessage] = useState<Message[]>([]);
    const API_URL = "http://localhost:5000/chat"

    const sendMessage = async (message: string) => {
        try {
            const response = await axios.post(API_URL, { message });
            return response.data.response;
        } catch (error) {
            console.error("Error connecting with backend", error);
            return "Could not process the request";
        }
    };

    const handleSend = async () => {
        if (!input) return;
        setMessage((prevMessage) => [...prevMessage, { role: 'user', content: input }]);
        const response = await sendMessage(input);
        setMessage((prevMessage) => [...prevMessage, { role: 'assistant', content: response }]);
        setInput('');
    };

    return (
        <div className="flex flex-col items-center p-6 max-w-lg mx-auto">
            <div className="w-full h-80 bg-white border border-gray-300 rounded-lg shadow-md p-4 overflow-y-scroll mb-4">
                {/* Render messages */}
                {message.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className="font-semibold">{msg.role === 'user' ? 'You' : 'Assistant'}:</span> {msg.content}
                    </div>
                ))}
            </div>
            <div className="flex w-full">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" ? handleSend() : null}
                    placeholder="Type your message..."
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSend}
                    className="bg-green-600 text-black px-4 py-2 rounded-r-lg hover transition-colors"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
