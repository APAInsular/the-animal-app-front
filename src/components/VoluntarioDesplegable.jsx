import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../index.css";
import axios from "axios";
import { cookieLink, getAllUsers, updateVolunteer } from "../data/data";

function VoluntarioDesplegable({ datos, users }) {
	const [desplegado, setDesplegado] = useState(false);

	const [volunteerData, setVolunteerData] = useState(datos);

	const [preVolunteerData, setPreVolunteerData] = useState(datos);

	const [usuarios, setUsuarios] = useState(users);

	const handleEdit = () => {
		console.log("intentado editar");
		console.log("peticion ruta: " + updateVolunteer + volunteerData.id);
		axios.get(cookieLink).then(function () {
			axios
				.put(updateVolunteer + volunteerData.id, volunteerData)
				.then(setPreVolunteerData(volunteerData))
				.catch((error) => console.log(error));
		});
	};

	const handleClose = () => {
		setVolunteerData(preVolunteerData);
		setDesplegado(!desplegado);
	};

	function handleDates(newFecha) {
		const fecha = new Date(newFecha);

		const año = fecha.getFullYear();
		const mes = fecha.getMonth() + 1; // Los meses en JavaScript se cuentan desde 0, por lo que hay que sumar 1
		const dia = fecha.getDate();

		const fechaFormateada = `${año}-${mes.toString().padStart(2, "0")}-${dia
			.toString()
			.padStart(2, "0")}`;

		return fechaFormateada;
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setVolunteerData({
			...volunteerData,
			[name]: value,
		});
	};

	return (
		<div className=" bg-[#d9d9d9] border border-black rounded-md mt-3 p-2">
			<div className=" flex justify-between px-2 w-full ">
				<h2 className="font-bold text-lg">
					{volunteerData.nombre + " " + volunteerData.apellido}
				</h2>
				<button onClick={() => setDesplegado(!desplegado)}>
					{desplegado ? <FaAngleUp /> : <FaAngleDown />}
				</button>
			</div>
			<div
				className={`${
					desplegado ? "flex flex-col" : "hidden"
				} border-t border-black`}
			>
				<label htmlFor="nombre" className="font-bold text-xl text-center">
					Nombre
				</label>
				<input
					type="text"
					name="nombre"
					id="nombre"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={volunteerData.nombre}
					onChange={handleChange}
				/>
				<label htmlFor="apellido" className="font-bold text-xl text-center">
					Apellido
				</label>
				<input
					type="text"
					name="apellido"
					id="apellido"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					onChange={handleChange}
					value={volunteerData.apellido}
				/>
				<label
					htmlFor="disponibilidad"
					className="font-bold text-xl text-center"
				>
					Disponibilidad
				</label>
				<input
					type="date"
					name="disponibilidad"
					id="disponibilidad"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={handleDates(volunteerData.disponibilidad)}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor="horario" className="font-bold text-xl text-center">
					Horario
				</label>
				<input
					type="datetime"
					name="horario"
					id="horario"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={volunteerData.horario}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor="idioma" className="font-bold text-xl text-center">
					Idioma
				</label>
				<select
					name="idioma"
					id="idioma"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={volunteerData.idioma}
					onChange={(e) => handleChange(e)}
				>
					<option value="ESPAÑOL">Español</option>
					<option value="INGLES">Ingles</option>
					<option value="ALEMAN">Aleman</option>
					<option value="OTROS">Otros</option>
				</select>
				<label htmlFor="user_id" className="font-bold text-xl text-center">
					Usuario
				</label>
				<select
					name="user_id"
					id="user_id"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					onChange={(e) => handleChange(e)}
					value={volunteerData.user_id}
				>
					<option value="null">Escoge un usuario</option>
					{usuarios.map((user, index) => (
						<option key={index} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
				<label htmlFor="email" className="font-bold text-xl text-center">
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={volunteerData.email}
					onChange={(e) => handleChange(e)}
				/>
				<div className="mx-auto flex flex-row justify-around">
					<button
						onClick={() => handleEdit()}
						className="mx-auto p-2 bg-[#26dd9a] rounded-md border border-black mt-2 hover:scale-105 transition-all"
					>
						Confirmar
					</button>
					<button
						onClick={() => handleClose()}
						className="mx-auto ms-2 p-2 bg-red-600 rounded-md border border-black mt-2 hover:scale-105 transition-all"
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}

export default VoluntarioDesplegable;
