import "../index.css";
import { useEffect } from "react";
import { useState } from "react";
import TareasVoluntarioDesplegable from "./TareasVoluntarioDesplegable";
import axios from "axios";
import { cookieLink, volunteerTasks } from "../data/data";

function VistaTareasVoluntario() {
	const fechaActual = new Date();

	const [tareas, setTareas] = useState([]);

	const [tareasPendientes, setTareasPendientes] = useState([]);

	const [tareasFinalizadas, setTareasFinalizadas] = useState([]);

	const [tareasAtrasadas, setTareasAtrasadas] = useState([]);

	useEffect(() => {
		const userToken = JSON.parse(localStorage.getItem("token"));
		const volunteerData = JSON.parse(localStorage.getItem("voluntario"));
		axios.get(cookieLink).then(function (response) {
			axios
				.get(volunteerTasks + volunteerData.id, {
					headers: {
						"X-CSRF-TOKEN": response.data.token, // Fetch CSRF token asynchronously
						Authorization: `Bearer ${userToken}`,
						"Content-Type": "application/json",
					},
				})
				.then(function (response1) {
					let data = response1.data;
					setTareas(response1.data);
					setTareasPendientes(
						data.filter(
							(item) =>
								new Date(item.fecha) >= fechaActual && item.finalizada !== 1
						)
					);
					setTareasAtrasadas(
						data.filter(
							(item) =>
								new Date(item.fecha) < fechaActual && item.finalizada !== 1
						)
					);
					setTareasFinalizadas(data.filter((item) => item.finalizada == 1));
					console.log(response1.data);
				});
		});
	}, []);

	return (
		<div className="container mx-auto p-4">
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-bold mb-4">
					Bienvenido a la gestión de tareas
				</h1>
				<p className="text-lg">
					Aquí puedes ver y gestionar tus tareas pendientes, atrasadas y
					completadas.
				</p>
			</div>
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Tareas Pendientes</h2>
				{tareasPendientes.map((tarea, index) => (
					<TareasVoluntarioDesplegable
						key={index}
						datos={tarea}
						tipo={"pendiente"}
					/>
				))}
				{tareasPendientes.length == 0 ? <h3> No hay tareas pendientes</h3> : ""}
				{/* <div className="section-date text-sm text-gray-500">
					Fecha: XX/XX/XXXX
				</div> */}
			</div>

			{/* Tareas Atrasadas */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Tareas Atrasadas</h2>
				{tareasAtrasadas.map((tarea, index) => (
					<TareasVoluntarioDesplegable
						key={index}
						datos={tarea}
						tipo={"atrasada"}
					/>
				))}
				{tareasAtrasadas.length == 0 ? <h3> No hay tareas atrasadas</h3> : ""}
			</div>

			{/* Tareas Completadas */}
			<div>
				<h2 className="text-xl font-semibold mb-4">Tareas Completadas</h2>
				{tareasFinalizadas.map((tarea, index) => (
					<TareasVoluntarioDesplegable
						key={index}
						datos={tarea}
						tipo={"completada"}
					/>
				))}
				{tareasFinalizadas.length == 0 ? (
					<h3> No hay tareas pendientes</h3>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default VistaTareasVoluntario;
