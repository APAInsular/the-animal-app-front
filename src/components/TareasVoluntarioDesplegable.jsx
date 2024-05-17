import axios from "axios";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { cookieLink, updateTareas } from "../data/data";

function TareasVoluntarioDesplegable({ datos, tipo }) {
	const [secciones, setSecciones] = useState(false);

	const toggleSecciones = () => {
		setSecciones(!secciones);
	};

	const handleComplete = () => {
		// Lógica para marcar la tarea como completada
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios.get(cookieLink).then(function (response) {
			axios
				.put(
					updateTareas + datos.id,
					{
						nombre: datos.nombre,
						descripcion: datos.descripcion,
						seRepite: datos.seRepite,
						comentario: datos.comentario
						finalizada: true,
					},
					{
						headers: {
							"X-CSRF-TOKEN": response.data.token, // Fetch CSRF token asynchronously
							Authorization: `Bearer ${userToken}`,
							"Content-Type": "application/json",
						},
					}
				)
				.then(function (response1) {
					console.log(response1);
				});
		});
	};

	function obtenerIdVideoYoutube(URI) {
		// Expresión regular para extraer el ID del video de la URL de YouTube
		for (let i = 0; i < URI.length; i++) {
			if (URI[i] == "=") {
				return URI.slice(i + 1 - URI.length);
			}
		}
	}

	function handleDates(newFecha) {
		const fecha = new Date(newFecha);
		const año = fecha.getFullYear();
		const mes = fecha.getMonth() + 1;
		const dia = fecha.getDate();
		const fechaFormateada = `${año}-${mes.toString().padStart(2, "0")}-${dia
			.toString()
			.padStart(2, "0")}`;
		return fechaFormateada;
	}

	return (
		<div
			className={`task border ${
				tipo == "pendiente"
					? "border-gray-200 rounded-lg p-4 mb-4 hover:bg-gray-100"
					: tipo == "atrasada"
					? "border-red-400 rounded-lg p-4 mb-4 hover:bg-red-100"
					: "border-green-400 rounded-lg p-4 mb-4 hover:bg-green-100"
			} transition-colors`}
		>
			<div
				className="flex items-center justify-between cursor-pointer "
				onClick={toggleSecciones}
			>
				<div className="flex items-center">
					<div
						className={`task-icon ${
							tipo == "pendiente"
								? "bg-gray-300"
								: tipo == "atrasada"
								? "bg-red-300"
								: "bg-green-300"
						} w-8 h-8 mr-2 rounded-full`}
					></div>
					<div className="task-title">{datos.nombre}</div>
				</div>
				<FaAngleDown
					className={`text-gray-500 ml-auto ${
						secciones ? "transform rotate-180" : ""
					}`}
				/>
			</div>
			{secciones && (
				<div className="task-details transition-all duration-300 ease-in-out mt-4">
					<div className="grid grid-cols-1 gap-4">
						<div className="grid-item">VIDEO DE YOUTUBE:</div>
						{datos.url ? (
							<iframe
								src={
									"https://www.youtube.com/embed/" +
									obtenerIdVideoYoutube(datos.url)
								}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope;"
								allowFullScreen
							></iframe>
						) : (
							""
						)}
						<div className="grid-item">TAREA:</div>
						<div className="grid-item text-gray-600">{datos.nombre}</div>
						<div className="grid-item">DESCRIPCIÓN:</div>
						<div className="text-gray-600">{datos.descripcion}</div>
						<div className="grid-item">FECHA DE LA TAREA:</div>
						<div className="grid-item section-date text-sm text-gray-500">
							{handleDates(datos.fecha)}
						</div>
						<div className="grid-item">
							{tipo == "completada" ? (
								<strong className="font-bold">
									¡Enhorabuena! Has completado la tarea
								</strong>
							) : (
								<button
									onClick={handleComplete}
									className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="stroke-current shrink-0 h-6 w-6 mr-2"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Completar Tarea {tipo == "atrasada" ? "Atrasada" : ""}
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default TareasVoluntarioDesplegable;
