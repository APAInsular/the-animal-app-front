import { useState, useEffect } from "react";
import "../index.css";
import Navbar from "../components/Navbar";

function MyProfile() {
	const [isEditing, setIsEditing] = useState(false);
	const [userData, setUserData] = useState({});

	const handleRequestDeletion = () => {};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	useEffect(() => {}, []);

	return (
		<div className="min-h-screen bg-gray-100">
			<Navbar />
			{/* Encabezado de la página */}
			<div className="text-center text-2xl font-bold mt-8 mb-4">Mi Perfil</div>
			{/* Contenedor de los datos del usuario */}
			<div className="max-w-md mx-auto border p-4 bg-white rounded-lg shadow-lg">
				{/* Título y datos del nombre */}
				<div className="mb-4">
					<div className="font-semibold">Nombre:</div>
					<div>NombreUsuario</div>
				</div>
			</div>
			<div className={`${isEditing ? "hidden" : "block"}`}>
				<p className="font-bold text-center mt-3 text-2xl">{userData.name}</p>
				<p className="font-bold text-center mt-3 text-xl">{userData.email}</p>
				<p className="font-bold text-center mt-3 text-2xl">+34 666606666</p>
			</div>
			<div className={`${isEditing ? "block" : "hidden"}`}>
				<form action="" className="flex flex-col justify-center">
					<input
						type="text"
						name="name"
						id="name"
						value={userData.name}
						className="font-bold text-center mt-3 text-2xl bg-[#d9d9d9] border border-black shadow-md rounded-md w-[80%] lg:w-[30%] mx-auto"
					/>
					<input
						type="email"
						name="email"
						id="mail"
						onChange={handleChange}
						value={userData.email}
						className="font-bold text-center mt-3 text-xl bg-[#d9d9d9] border border-black shadow-md rounded-md w-[80%] lg:w-[30%] mx-auto"
					/>
					<input
						type="text"
						name="tlf"
						id="tlf"
						onChange={handleChange}
						value={"+34 666606666"}
						className="font-bold text-center mt-3 text-2xl bg-[#d9d9d9] border border-black shadow-md rounded-md w-[80%] lg:w-[30%] mx-auto"
					/>
					<input
						type="submit"
						value="Guardar cambios"
						className="p-2 bg-[#26dd9a] font-bold w-40 border border-black rounded-lg mx-auto mt-4 cursor-pointer hover:scale-105 transition-all"
					/>
					<button className="p-2 text-white bg-red-600 font-bold w-40 border border-black rounded-lg mx-auto mt-4 cursor-pointer hover:scale-105 transition-all">
						Pedir eliminar mi cuenta
					</button>
				</form>
				{/* Botón para solicitar borrado de cuenta */}
				<button
					className="bg-red-500 text-white px-4 py-2 mr-2 my-2 rounded-lg w-full"
					onClick={handleRequestDeletion}
				>
					Solicitar Borrado de Cuenta
				</button>
			</div>
		</div>
	);
}

export default MyProfile;
