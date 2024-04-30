import React, { useState } from "react";
import Navbar from "../components/Navbar";

function MyProfile() {
	const [modifyingData, setModifyingData] = useState(false);

	const handleModifyData = () => {
		setModifyingData(!modifyingData);
	};

	const handleAcceptChanges = () => {
		// Lógica para aceptar los cambios
		setModifyingData(false);
		// Lógica adicional si es necesario
	};

	const handleRequestDeletion = () => {
		// Lógica para solicitar el borrado de cuenta
		// Puede mostrar un modal de confirmación antes de enviar la solicitud
	};

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
				{/* Título y datos del correo electrónico */}
				<div className="mb-4">
					<div className="font-semibold">Correo electrónico:</div>
					<div>correo@example.com</div>
				</div>
				{/* Título y datos del teléfono */}
				<div className="mb-4">
					<div className="font-semibold">Teléfono:</div>
					<div>123456789</div>
				</div>
				{/* Botón para modificar datos */}
				{!modifyingData ? (
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 my-2 w-full"
						onClick={handleModifyData}
					>
						Modificar Datos
					</button>
				) : (
					<button
						className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 w-full"
						onClick={handleAcceptChanges}
					>
						Aceptar Cambios
					</button>
				)}
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

