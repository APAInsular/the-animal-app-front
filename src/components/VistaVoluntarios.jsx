import { useEffect, useState } from "react";
import "../index.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
	cookieLink,
	getAllUsers,
	getFormacion,
	getVolunteers,
} from "../data/data";
import axios from "axios";
import VoluntarioDesplegable from "./VoluntarioDesplegable";

function VistaVoluntarios() {
	const [volunteer, setVolunteer] = useState([]);
	const [usuarios, setUsuarios] = useState([]);
	const [newVolunteer, setNewVolunteer] = useState({});
	const [formaciones, setFormaciones] = useState([]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewVolunteer({
			...newVolunteer,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newVolunteer);
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios
			.get(cookieLink)
			.then(function (response) {
				axios.post(getVolunteers, newVolunteer, {
					headers: {
						"X-CSRF-TOKEN": response.data.token, // Fetch CSRF token asynchronously
						Authorization: `Bearer ${userToken}`,
						"Content-Type": "application/json",
					},
				});
			})
			.then(function (response1) {
				setVolunteer(...volunteer, response1.data);
			});
	};

	const handlePDF = () => {};

	useEffect(() => {
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios.get(cookieLink).then(function (response) {
			axios.get(getAllUsers).then(function (response) {
				setUsuarios(response.data.users);
			});
			axios.get(getFormacion).then(function (response) {
				setFormaciones(response.data);
			});
			axios
				.get(getVolunteers, {
					headers: {
						"X-CSRF-TOKEN": response.data.token, // Fetch CSRF token asynchronously
						Authorization: `Bearer ${userToken}`,
						"Content-Type": "application/json",
					},
				})
				.then(function (response) {
					console.log(response);
					setVolunteer(response.data);
				});
		});
	}, []);

	return (
		<div className=" flex flex-row">
			<div className="hidden lg:block w-3/12 p-2 border-e-2 border-black">
				<div className="w-full">
					<form
						className="h-full w-full bg-[#d9d9d9] flex flex-col border border-black rounded-lg p-2"
						onSubmit={(e) => handleSubmit(e)}
					>
						<label className="font-bold text-xl mt-2" htmlFor="name">
							Nombre
						</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newVolunteer.nombre}
						/>
						<label className="font-bold text-xl mt-2" htmlFor="apellido">
							Apellido
						</label>
						<input
							type="text"
							name="apellido"
							id="apellido"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newVolunteer.apellido}
						/>
						<label className="font-bold text-xl mt-2" htmlFor="email">
							Correo Electronico
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newVolunteer.email}
						/>
						<label className="font-bold text-xl mt-2" htmlFor="date">
							Disponibilidad
						</label>
						<input
							type="date"
							name="disponibilidad"
							id="disponibilidad"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newVolunteer.disponibilidad}
						/>
						<label className="font-bold text-xl mt-2" htmlFor="idioma">
							Idioma
						</label>
						<select
							name="idioma"
							id="idioma"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newVolunteer.idioma}
						>
							<option value="null">Escoge idioma</option>
							<option value="ESPAÑOL">Español</option>
							<option value="INGLES">Ingles</option>
							<option value="ALEMAN">Aleman</option>
							<option value="FRANCES">Frances</option>
							<option value="OTROS">Otros</option>
						</select>
						<label htmlFor="horario" className="font-bold text-xl mt-2">
							Horario
						</label>
						<input
							type="datetime"
							name="horario"
							placeholder="EJ: 16:00"
							id="horario"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newVolunteer.horario}
						/>
						<label htmlFor="user_id" className="font-bold text-xl mt-2">
							Usuario
						</label>
						<select
							name="user_id"
							id="user_id"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1 cursor-pointer"
							onChange={(e) => handleChange(e)}
							value={newVolunteer.user_id}
						>
							<option value="null">Escoge un usuario</option>
							{usuarios.map((user, index) => (
								<option key={index} value={user.id}>
									{user.name}
								</option>
							))}
						</select>
						<label htmlFor="formacion_id" className="font-bold text-xl mt-2">
							Formacion
						</label>
						<select
							name="formacion_id"
							id="formacion_id"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1 cursor-pointer"
							value={newVolunteer.formacion_id}
							onChange={(e) => handleChange(e)}
						>
							<option value="null">Escoge una formacion</option>
							{formaciones.map((forma, index) => (
								<option key={index} value={forma.id}>
									{forma.nombre}
								</option>
							))}
						</select>
						<input
							type="submit"
							value="Confirmar"
							className="rounded-xl p-1 bg-[#26dd9a] border border-black w-1/2 mx-auto mt-4 font-bold cursor-pointer"
						/>
					</form>
				</div>
				<div className="bg-[#d9d9d9] flex flex-col mt-3 justify-center h-32 rounded-lg border border-black">
					<h2 className="text-lg font-bold text-center">
						La cantidad total de voluntarios es de : {volunteer.length}
					</h2>
					<button
						onClick={() => handlePDF}
						className="mt-1 p-2 rounded-lg bg-[#fef08a] border border-black w-[90%] mx-auto hover:scale-105 transition-all"
					>
						Guardar como PDF
					</button>
				</div>
			</div>
			<div className="hidden lg:block w-full">
				<h2 className="text-center font-bold text-2xl">Voluntarios</h2>
				<div className="w-full p-1 flex flex-row">
					<input
						type="text"
						name="search"
						placeholder="Busca Voluntarios por nombres y apellidos"
						id="search"
						className="bg-[#f4f0f0] rounded-md p-2 border border-black w-[100%] mt-1"
					/>
					<button className="-ms-7">
						<FaMagnifyingGlass />
					</button>
				</div>
				<div className="overflow-y-scroll ps-2">
					{volunteer.map((volunteer, index) => (
						<VoluntarioDesplegable
							datos={volunteer}
							users={usuarios}
							key={index}
						/>
					))}
				</div>
			</div>
			<div className="lg:hidden w-full">
				<div className="flex flex-col w-full justify-center p-2">
					<div className="collapse bg-[#26dd9a] border border-black">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium text-center">
							Desplegar para añadir Voluntari@
						</div>
						<div className="collapse-content bg-[#f4f0f0] p-1">
							<form className="h-full w-full bg-transparent flex flex-col border border-black rounded-lg p-2">
								<label className="font-bold text-xl mt-2" htmlFor="name">
									Nombre
								</label>
								<input
									type="text"
									name="nombre"
									id="nombre"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newVolunteer.nombre}
								/>
								<label className="font-bold text-xl mt-2" htmlFor="apellido">
									Apellido
								</label>
								<input
									type="text"
									name="apellido"
									id="apellido"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newVolunteer.apellido}
								/>
								<label className="font-bold text-xl mt-2" htmlFor="email">
									Correo Electronico
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newVolunteer.email}
								/>
								<label className="font-bold text-xl mt-2" htmlFor="date">
									Disponibilidad
								</label>
								<input
									type="date"
									name="disponibilidad"
									id="disponibilidad"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newVolunteer.disponibilidad}
								/>
								<label className="font-bold text-xl mt-2" htmlFor="idioma">
									Idioma
								</label>
								<select
									name="idioma"
									id="idioma"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newVolunteer.idioma}
								>
									<option value="null">Escoge un idioma</option>
									<option value="ESPAÑOL">Español</option>
									<option value="INGLES">Ingles</option>
									<option value="ALEMAN">Aleman</option>
									<option value="FRANCES">Frances</option>
									<option value="OTROS">Otros</option>
								</select>
								<label htmlFor="horario" className="font-bold text-xl mt-2">
									Horario
								</label>
								<input
									type="datetime"
									name="horario"
									placeholder="EJ: 16:00"
									id="horario"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newVolunteer.horario}
								/>
								<label htmlFor="user_id" className="font-bold text-xl mt-2">
									Usuario
								</label>
								<select
									name="user_id"
									id="user_id"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1 cursor-pointer"
									onChange={(e) => handleChange(e)}
									value={newVolunteer.user_id}
								>
									<option value="null">Escoge un usuario</option>
									{usuarios.map((user, index) => (
										<option key={index} value={user.id}>
											{user.name}
										</option>
									))}
								</select>
								<label
									htmlFor="formacion_id"
									className="font-bold text-xl mt-2"
								>
									Formacion
								</label>
								<select
									name="formacion_id"
									id="formacion_id"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1 cursor-pointer"
									value={newVolunteer.formacion_id}
									onChange={(e) => handleChange(e)}
								>
									<option value="null">Escoge una formacion</option>
									{formaciones.map((forma, index) => (
										<option key={index} value={forma.id}>
											{forma.nombre}
										</option>
									))}
								</select>
								<input
									type="submit"
									value="Confirmar"
									className="rounded-xl p-1 bg-[#26dd9a] border border-black w-1/2 mx-auto mt-4 font-bold cursor-pointer"
								/>
							</form>
						</div>
					</div>
				</div>
				<div>
					<h2 className="mb-1 mt-2 text-2xl font-bold ms-4">
						Usuarios existentes:
					</h2>
					<div className="w-full p-3 flex flex-row">
						<input
							type="text"
							name="search"
							id="search"
							className="bg-[#f4f0f0] rounded-md p-2 border border-black w-[100%] mt-1"
						/>
						<button className="-ms-7">
							<FaMagnifyingGlass />
						</button>
					</div>
					<div className="overflow-y-scroll ps-2">
						{volunteer.map((volunteer, index) => (
							<VoluntarioDesplegable
								datos={volunteer}
								users={usuarios}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default VistaVoluntarios;
