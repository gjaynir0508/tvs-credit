import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "name", headerName: "Name", width: 150 },
	{ field: "status", headerName: "Status", width: 130 },
	{ field: "score", headerName: "Lead Score", width: 130 },
	{ field: "action", headerName: "Action", width: 150 },
];

const rows = [
	{ id: 1, name: "John Doe", status: "New", score: 85 },
	{ id: 2, name: "Jane Smith", status: "Followed Up", score: 92 },
];

const Dashboard = () => {
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid rows={rows} columns={columns} />
		</div>
	);
};

export default Dashboard;
