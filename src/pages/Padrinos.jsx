import { useEffect } from "react";
import Navbar from "../components/Navbar";
import VistaPadrinos from "../components/VistaPadrinos";

function Padrinos() {
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("user"));
		if (userData.rol_id != 1) {
			window.location = "/404";
		}
	});

	return (
		<div>
			<Navbar />
			<VistaPadrinos />
		</div>
	);
}

export default Padrinos;
