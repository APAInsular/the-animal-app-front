import { useEffect, useState } from "react";
import "../index.css";
import { Pie } from "react-chartjs-2";
import { pieChartVolunteerData } from "../data/data";
import useAxios from "../hooks/useAxios";

function VistaVoluntarios() {
	const [pieData, setPieData] = useState(null);
	let respuesta = useAxios("GET", pieChartVolunteerData);
	setPieData({
		man: respuesta.hombre,
		woman: respuesta.mujer,
	});

	const dataForPie = {
		labels: ["Hombre", "Mujer"],
		datasets: [
			{
				data: [pieData.man, pieData.woman],
				backgroundColor: ["blue", "pink"],
			},
		],
	};

	useEffect(() => {});

	return (
		<div className=" flex flex-col">
			<div className="hidden w-3/12">
				<div className=" h-3/5">
					<form className="">
						<label htmlFor="name">Nombre</label>
						<input type="text" name="name" id="name" />
						<label htmlFor="description">Descripcion</label>
						<input type="text" name="description" id="description" />
						<label htmlFor="email">Correo Electronico</label>
						<input type="email" name="email" id="email" />
						<label htmlFor="date">Fecha Nacimiento</label>
						<input type="date" name="date" id="date" />
						<label htmlFor="tlf">Numero de telefono</label>
						<input type="text" name="tlf" id="tlf" />
						<input type="submit" value="Confirmar" />
					</form>
				</div>
				<div>
					<Pie data={dataForPie} />
				</div>
			</div>
			<div className="hidden"></div>
			<div className="lg:hidden"></div>
		</div>
	);
}

export default VistaVoluntarios;
