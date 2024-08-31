import React, { useState, useEffect, useRef } from 'react';

const ChatbotPopup = ({ onClose }) => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { type: 'bot', message: 'Hi! How can I assist you today?' }
    ]);

    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    const handleSend = async () => {
        if (userInput.trim() !== '') {
            setChatHistory([...chatHistory, { type: 'user', message: userInput }]);
            try {
                const response = await fetch('http://localhost:5000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: userInput })
                });
                const data = await response.json();
                setChatHistory(prev => [...prev, { type: 'bot', message: data.response }]);
            } catch (error) {
                setChatHistory(prev => [...prev, { type: 'bot', message: 'Sorry, there was an error. Please try again later.' }]);
            }
            setUserInput('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="bg-white border-solid border-[1px] border-[#C1C1C1] rounded-bl-[30px] rounded-tr-[30px] p-4 fixed bottom-20 right-4 w-[90%] max-w-[400px] md:w-[300px] z-50 shadow-dashboard">
            <div className="chat-header flex justify-between items-center">
                <h2 className="text-lg font-bold">Vacbot</h2>
                <button onClick={onClose} className=" font-bold rounded-full w-[24px] h-[24px] flex items-center justify-center text-center border-solid border-[1px] border-[#C1C1C1] text-lg text-red-500 hover:opacity-70 shadow-customTooltip">X</button>
            </div>
            <div className="relative mt-4 mb-2 h-[150px] overflow-y-auto">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`chat-bubble ${chat.type === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'} p-2 mb-1 rounded`}>
                        {chat.message}
                    </div>
                ))}
                <div ref={chatEndRef} className=' -mt-[150px]' />
            </div>
            <div className="chat-input mt-2">
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your question..."
                />
                <button onClick={handleSend} className="bg-black text-white mt-2 p-2 rounded w-full">Send</button>
            </div>
        </div>
    );
};

export default ChatbotPopup;
