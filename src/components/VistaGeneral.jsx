import { useEffect, useState } from "react";
import axios from "axios";
import { cookieLink, createUser, getFormacion } from "../data/data";

function VistaGeneral() {
	// Estado para los datos de nuevos usuarios, especies y formaciones
	const [newUser, setNewUser] = useState({});
	const [newFormacion, setNewFormacion] = useState({});

	// Estado para almacenar usuarios, especies y formaciones existentes
	const [users, setUsers] = useState([]);
	const [formaciones, setFormaciones] = useState([]);

	// Función para manejar el cambio en los campos de usuario
	const handleChangeUser = (event) => {
		const { name, value } = event.target;
		setNewUser({
			...newUser,
			[name]: value,
		});
	};

	// Función para manejar el cambio en los campos de formación
	const handleChangeFormacion = (event) => {
		const { name, value } = event.target;
		setNewFormacion({
			...newFormacion,
			[name]: value,
		});
	};

	// Función para enviar el formulario según el tipo (usuario, especie, formación)
	const handleSubmit = async (event, tipo) => {
		console.log("empieza el submit");
		event.preventDefault();
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios.get(cookieLink).then((response) => {
			const csrfToken = response.data.token;
			const headers = {
				"X-CSRF-TOKEN": csrfToken,
				Authorization: `Bearer ${userToken}`,
				"Content-Type": "application/json",
			};

			if (tipo == "user") {
				axios.post(createUser, newUser, { headers }).then((response1) => {
					console.log("empieza el submit de usuario");
					setUsers([...users, response1.data]);
				});
			} else if (tipo == "formacion") {
				console.log("empieza el submit de formacion");
				axios
					.post(getFormacion, newFormacion, { headers })
					.then((response1) => {
						setFormaciones([...formaciones, response1.data]);
						console.log(response1);
					});
			}
		});
	};

	// Lógica para cargar los datos iniciales al cargar la página
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [formacionesResponse] = await Promise.all([
					axios.get(getFormacion),
				]);
				setFormaciones(formacionesResponse.data);
			} catch (error) {
				console.error("Error al cargar datos iniciales:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container mx-auto mt-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Formulario para crear usuario */}
				<div className="bg-white p-4 rounded-lg shadow">
					<h2 className="text-xl font-semibold mb-4">Crear Usuario</h2>
					<form onSubmit={(e) => handleSubmit(e, "user")}>
						<div className="mb-4">
							<label htmlFor="name" className="block font-semibold mb-2">
								Nombre
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="w-full px-3 py-2 border border-gray-300 rounded"
								value={newUser.name || ""}
								onChange={handleChangeUser}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block font-semibold mb-2">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="w-full px-3 py-2 border border-gray-300 rounded"
								value={newUser.email || ""}
								onChange={handleChangeUser}
							/>
						</div>
						<input
							type="submit"
							value="Crear Usuario"
							className="bg-blue-500 text-white w-2/5 mx-auto mt-4 px-4 py-2 rounded font-semibold hover:bg-blue-600 cursor-pointer"
						/>
					</form>
				</div>

				{/* Formulario para crear formación */}
				<div className="bg-white p-4 rounded-lg shadow">
					<h2 className="text-xl font-semibold mb-4">Crear Formación</h2>
					<form
						className="flex flex-col"
						onSubmit={(e) => handleSubmit(e, "formacion")}
					>
						<label htmlFor="nombre" className="block font-semibold mb-2">
							Nombre
						</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							className="w-full px-3 py-2 border border-gray-300 rounded"
							value={newFormacion.nombre || ""}
							onChange={(e) => handleChangeFormacion(e)}
						/>
						<label htmlFor="fecha_inicio" className="block font-semibold mb-2">
							Fecha Inicio
						</label>
						<input
							type="date"
							name="fecha_inicio"
							id="fecha_inicio"
							className="w-full px-3 py-2 border border-gray-300 rounded"
							value={newFormacion.fecha_inicio || ""}
							onChange={(e) => handleChangeFormacion(e)}
						/>
						<label htmlFor="fecha_final" className="block font-semibold mb-2">
							Fecha Final
						</label>
						<input
							type="date"
							name="fecha_fin"
							id="fecha_fin"
							className="w-full px-3 py-2 border border-gray-300 rounded"
							value={newFormacion.fecha_fin || ""}
							onChange={(e) => handleChangeFormacion(e)}
						/>
						<input
							type="submit"
							value="Crear Formacion"
							className="bg-blue-500 text-white w-2/5 mx-auto  mt-4 px-4 py-2 rounded font-semibold hover:bg-blue-600 cursor-pointer"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default VistaGeneral;

/*
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
				</form>*/
