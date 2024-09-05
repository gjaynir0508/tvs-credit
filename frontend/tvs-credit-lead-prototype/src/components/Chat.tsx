import { useState } from "react";

const Chatbot = () => {
	const [messages, setMessages] = useState<{ from: string; text: string }[]>(
		[]
	);
	const [input, setInput] = useState("");

	const handleSend = () => {
		setMessages([...messages, { from: "user", text: input }]);
		// Simulate bot response for now
		setTimeout(() => {
			setMessages((prev) => [
				...prev,
				{ from: "bot", text: "Hello! How can I help you?" },
			]);
		}, 1000);
		setInput("");
	};

	return (
		<div className="chat-container">
			<div className="chat-window">
				{messages.map((msg, index) => (
					<div key={index} className={`message ${msg.from}`}>
						{msg.text}
					</div>
				))}
			</div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Type a message..."
			/>
			<button onClick={handleSend}>Send</button>
		</div>
	);
};

export default Chatbot;
