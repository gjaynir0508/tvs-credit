import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const LeadForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		loanAmount: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Submit logic here
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				name="name"
				label="Name"
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<TextField
				name="email"
				label="Email"
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<TextField
				name="loanAmount"
				label="Loan Amount"
				value={formData.loanAmount}
				onChange={handleChange}
				required
			/>
			<Button type="submit" variant="contained" color="primary">
				Submit
			</Button>
		</form>
	);
};

export default LeadForm;
