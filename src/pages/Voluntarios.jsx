import { useEffect } from "react";
import Navbar from "../components/Navbar";
import VistaVoluntarios from "../components/VistaVoluntarios";

function Voluntarios() {
	useEffect(() => {
		const usertoken = localStorage.getItem("token");
		if (!usertoken) {
			window.location = "/";
		}
	}, []);

	return (
		<div>
			<Navbar />
			<VistaVoluntarios />
		</div>
	);
}

export default Voluntarios;
