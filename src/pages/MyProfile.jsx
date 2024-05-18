import { useState, useEffect } from "react";
import { FiTrash, FiCheck, FiEdit } from "react-icons/fi";
import Navbar from "../components/Navbar";

function MyProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [tempUserData, setTempUserData] = useState({});
	const [userData, setUserData] = useState({});
	
	// Cargar los datos del usuario al montar el componente
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("user"));
		setUserData(data);
		setTempUserData(data); // Inicializar tempUserData con los datos del usuario
	}, []);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTempUserData({
            ...tempUserData,
            [name]: value,
        });
    };

    const handleRequestDeletion = () => {
        // Implementar la lógica para solicitar la eliminación de la cuenta
    };

	const handleSaveChanges = async () => {
		// Actualizar los datos en la base de datos
		try {
			await updateUserData(tempUserData); // Envía los datos actualizados al servidor
			setUserData(tempUserData); // Actualiza el estado local con los datos modificados
			localStorage.setItem("user", JSON.stringify(tempUserData)); // Actualiza los datos en el localStorage
			setIsEditing(false); // Cambia el estado de edición a false
		} catch (error) {
			console.error("Error al actualizar los datos:", error);
			// Aquí puedes manejar el error de manera apropiada, por ejemplo, mostrando un mensaje de error al usuario
		}
	};
	

	return (
		<div className="min-h-screen bg-gray-100">
			<Navbar />
			<div className="max-w-md mx-auto p-6 mt-8 bg-white rounded-lg shadow-lg">
				<div className="text-center text-2xl font-bold mb-4">Perfil de {userData.name}</div>
				<div className="mb-4">
					<div className="font-semibold mb-1">Nombre:</div>
					<div className="flex items-center">
						<input
							type="text"
							name="name"
							value={isEditing ? tempUserData.name : userData.name}
							onChange={handleInputChange}
							className={`input-field ${isEditing ? "border-b border-gray-400" : "border-none"}`}
							disabled={!isEditing}
						/>
						{isEditing ? (
							<FiCheck className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors" onClick={handleSaveChanges} />
						) : <FiEdit className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors" onClick={handleEditToggle} />}
					</div>
				</div>
				<div className="mb-4">
					<div className="font-semibold mb-1">Correo electrónico:</div>
					<div className="flex items-center">
						<input
							type="email"
							name="email"
							value={isEditing ? tempUserData.email : userData.email}
							onChange={handleInputChange}
							className={`input-field ${isEditing ? "border-b border-gray-400" : "border-none"}`}
							disabled={!isEditing}
						/>
						{isEditing ? (
							<FiCheck className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors" onClick={handleSaveChanges} />
						) : <FiEdit className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors" onClick={handleEditToggle} />}
					</div>
				</div>
				<div className="flex justify-between items-center mb-4">
					{isEditing ? (
						<button className="btn btn-confirm" onClick={handleSaveChanges}>
							<FiCheck className="mr-2" />
							Guardar Cambios
						</button>
					) : null}
					<button className="btn btn-delete" onClick={handleRequestDeletion}>
						<FiTrash className="mr-2" />
						Solicitar Borrado de Cuenta
					</button>
				</div>
			</div>
		</div>
	);
	
}

export default MyProfile;
