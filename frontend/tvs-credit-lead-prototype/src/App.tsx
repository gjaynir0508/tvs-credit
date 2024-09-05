import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chat";
import Dashboard from "./components/Dashboard";
import LeadForm from "./components/LeadForm";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Chatbot />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/lead-form" element={<LeadForm />} />
			</Routes>
		</Router>
	);
}

export default App;

