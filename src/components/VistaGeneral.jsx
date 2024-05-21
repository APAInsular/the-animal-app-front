import axios from "axios";
import { useEffect, useState } from "react";
import {
	cookieLink,
	createUser,
	getAllUsers,
	getEspecies,
	getFormacion,
} from "../data/data";

function VistaGeneral() {
	const [newUser, setNewUser] = useState({});
	const [newEspecie, setNewEspecie] = useState({});
	const [newFormacion, setNewFormacion] = useState({});

	const [users, setUsers] = useState([]);
	const [especies, setEspecies] = useState([]);
	const [formaciones, setFormaciones] = useState([]);

	useEffect(() => {
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios.get(cookieLink).then((response) => {
			const csrfToken = response.data.token;
			const headers = {
				"X-CSRF-TOKEN": csrfToken,
				Authorization: `Bearer ${userToken}`,
				"Content-Type": "application/json",
			};

			axios.get(getEspecies, { headers }).then((response1) => {
				setEspecies(response1.data);
			});

			axios.get(getFormacion, { headers }).then((response1) => {
				setFormaciones(response1.data);
			});

			axios.get(getAllUsers, { headers }).then((response1) => {
				setUsers(response1.data);
			});
		});
	}, []);

	const handleChangeUser = (event) => {
		const { name, value } = event.target;
		setNewUser({
			...newUser,
			[name]: value,
		});
	};

	const handleChangeEspecie = (event) => {
		const { name, value } = event.target;
		setNewEspecie({
			...newEspecie,
			[name]: value,
		});
	};

	const handleChangeFormacion = (event) => {
		const { name, value } = event.target;
		setNewFormacion({
			...newFormacion,
			[name]: value,
		});
	};

	const handleSubmit = (event, tipo) => {
		event.preventDefault();
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios.get(cookieLink).then((response) => {
			const csrfToken = response.data.token;
			const headers = {
				"X-CSRF-TOKEN": csrfToken,
				Authorization: `Bearer ${userToken}`,
				"Content-Type": "application/json",
			};

			if (tipo === "user") {
				axios.post(createUser, newUser, { headers }).then((response1) => {
					setUsers([...users, response1.data]);
				});
			} else if (tipo === "especie") {
				axios.post(getEspecies, newEspecie, { headers }).then((response1) => {
					setEspecies([...especies, response1.data]);
				});
			} else if (tipo === "formacion") {
				axios
					.post(getFormacion, newFormacion, { headers })
					.then((response1) => {
						setFormaciones([...formaciones, response1.data]);
					});
			}
		});
	};

	return (
		<div className="flex justify-evenly mt-6">
			<div className="p-1 rounded-lg bg-[#d9d9d9] border border-black w-[30%]">
				<h2 className="text-xl text-center">Crear Usuario</h2>
				<form
					className="flex flex-col p-1"
					onSubmit={(e) => handleSubmit(e, "user")}
				>
					<label htmlFor="name" className="text-center font-bold">
						Nombre
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="border border-black p-1 rounded-lg"
						value={newUser.name || ""}
						onChange={handleChangeUser}
					/>
					<label htmlFor="email" className="text-center font-bold">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="border border-black p-1 rounded-lg"
						value={newUser.email || ""}
						onChange={handleChangeUser}
					/>
					<input
						type="submit"
						value="Crear Usuario"
						className="p-1 rounded-lg border border-black mt-2 font-bold bg-[#eeeded] "
					/>
				</form>
			</div>
			<div className="p-1 rounded-lg bg-[#d9d9d9] border border-black w-[30%]">
				<h2 className="text-xl text-center">Crear Especie</h2>
				<form
					className="flex flex-col"
					onSubmit={(e) => handleSubmit(e, "especie")}
				>
					<label htmlFor="nombre" className="text-center font-bold">
						Nombre
					</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						className="border border-black p-1 rounded-lg"
						value={newEspecie.nombre || ""}
						onChange={handleChangeEspecie}
					/>
					<input
						type="submit"
						value="Crear Especie"
						className="p-1 rounded-lg border border-black mt-2 font-bold bg-[#eeeded] "
					/>
				</form>
			</div>
			<div className="p-1 rounded-lg bg-[#d9d9d9] border border-black w-[30%]">
				<h2 className="text-xl text-center">Crear Formacion</h2>
				<form
					className="flex flex-col"
					onSubmit={(e) => handleSubmit(e, "formacion")}
				>
					<label htmlFor="nombre" className="text-center font-bold">
						Nombre
					</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						className="border border-black p-1 rounded-lg"
						value={newFormacion.nombre || ""}
						onChange={handleChangeFormacion}
					/>
					<label htmlFor="fecha_inicio" className="text-xl text-center">
						Fecha Inicio
					</label>
					<input
						type="date"
						name="fecha_inicio"
						id="fecha_inicio"
						className="border border-black p-1 rounded-lg"
						value={newFormacion.fecha_inicio || ""}
						onChange={handleChangeFormacion}
					/>
					<label htmlFor="fecha_final" className="text-xl text-center">
						Fecha Final
					</label>
					<input
						type="date"
						name="fecha_fin"
						id="fecha_fin"
						className="border border-black p-1 rounded-lg"
						value={newFormacion.fecha_fin || ""}
						onChange={handleChangeFormacion}
					/>
					<input
						type="submit"
						value="Crear Formacion"
						className="p-1 rounded-lg border border-black mt-2 font-bold bg-[#eeeded] "
					/>
				</form>
			</div>
		</div>
	);
}

export default VistaGeneral;
