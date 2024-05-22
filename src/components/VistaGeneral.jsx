import { useEffect, useState } from "react";
import axios from "axios";
import { createUser, getEspecies, getFormacion } from "../data/data";

function VistaGeneral() {
	// Estado para los datos de nuevos usuarios, especies y formaciones
	const [newUser, setNewUser] = useState({});
	const [newEspecie, setNewEspecie] = useState({});
	const [newFormacion, setNewFormacion] = useState({});

	// Estado para almacenar usuarios, especies y formaciones existentes
	const [users, setUsers] = useState([]);
	const [especies, setEspecies] = useState([]);
	const [formaciones, setFormaciones] = useState([]);

	// Función para manejar el cambio en los campos de usuario
	const handleChangeUser = (event) => {
		const { name, value } = event.target;
		setNewUser({
			...newUser,
			[name]: value,
		});
	};

	// Función para manejar el cambio en los campos de especie
	const handleChangeEspecie = (event) => {
		const { name, value } = event.target;
		setNewEspecie({
			...newEspecie,
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
		event.preventDefault();

		try {
			let response;

			// Lógica de envío del formulario según el tipo
			if (tipo === "user") {
				response = await axios.post(createUser, newUser);
				setUsers([...users, response.data]);
			} else if (tipo === "especie") {
				response = await axios.post(getEspecies, newEspecie);
				setEspecies([...especies, response.data]);
			} else if (tipo === "formacion") {
				response = await axios.post(getFormacion, newFormacion);
				setFormaciones([...formaciones, response.data]);
			}

			// Reiniciar los campos de entrada después de enviar el formulario
			setNewUser({});
			setNewEspecie({});
			setNewFormacion({});
		} catch (error) {
			console.error("Error al enviar el formulario:", error);
		}
	};

	// Lógica para cargar los datos iniciales al cargar la página
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [especiesResponse, formacionesResponse] = await Promise.all([
					axios.get(getEspecies),
					axios.get(getFormacion),
				]);
				setEspecies(especiesResponse.data);
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
							<label htmlFor="name" className="block font-semibold mb-2">Nombre</label>
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
							<label htmlFor="email" className="block font-semibold mb-2">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								className="w-full px-3 py-2 border border-gray-300 rounded"
								value={newUser.email || ""}
								onChange={handleChangeUser}
							/>
						</div>
						<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600">Crear Usuario</button>
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
							onChange={handleChangeFormacion}
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
							onChange={handleChangeFormacion}
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
							onChange={handleChangeFormacion}
						/>


					</form>
					<button type="submit" value="Crear Formacion" className="bg-blue-500 text-white  mt-4 px-4 py-2 rounded font-semibold hover:bg-blue-600">Crear Formación</button>
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