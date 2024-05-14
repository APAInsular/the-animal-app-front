import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import "../index.css";
import { animalsLink } from "../data/data";

function AnimalDesplegable({ datos, onEdit, onDelete }) {
    const [desplegado, setDesplegado] = useState(false);
    const [animalData, setAnimalData] = useState(datos);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setAnimalData({
            ...animalData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleEdit = async () => {
        try {
            const response = await axios.put(`${animalsLink}/${animalData.id}`, animalData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Animal editado exitosamente:', response.data);
            setIsEditing(false); // Salir del modo de edición después de guardar
            onEdit(response.data); // Actualiza el animal en el estado del componente padre
        } catch (error) {
            console.error('Error al editar el animal:', error);
        }
    };

    const handleDelete = () => {
        onDelete(animalData.id);
    };

    return (
        <div className="bg-[#d9d9d9] border border-black rounded-md mt-3 p-2">
            <div className="flex justify-between px-2 w-full">
                <h2 className="font-bold text-lg">{animalData.nombre}</h2>
                <button onClick={() => setDesplegado(!desplegado)}>
                    {desplegado ? <FaAngleUp /> : <FaAngleDown />}
                </button>
            </div>
            <div className={`${desplegado ? "flex flex-col" : "hidden"} border-t border-black mt-2`}>
                <div className="flex justify-end space-x-2 mb-2">
                    <button onClick={() => setIsEditing(!isEditing)} className="p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        <FaEdit />
                    </button>
                    <button onClick={handleDelete} className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                        <FaTrash />
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src={animalData.foto} alt={animalData.nombre} className="w-32 h-32 object-cover rounded-md border border-black" />
                </div>
                <div className="text-center mt-2">
                    <h3 className="font-bold">Datos</h3>
                </div>
                {isEditing ? (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.nombre}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="edad"
                            id="edad"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.edad}
                            onChange={handleChange}
                        />
                        <textarea
                            name="historia"
                            id="historia"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.historia}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="fecha_nacimiento"
                            id="fecha_nacimiento"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.fecha_nacimiento}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="fecha_esterilizacion"
                            id="fecha_esterilizacion"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.fecha_esterilizacion}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="fecha_llegada"
                            id="fecha_llegada"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.fecha_llegada}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="raza"
                            id="raza"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.raza}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="tipo"
                            id="tipo"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.tipo}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="microchip"
                            id="microchip"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.microchip}
                            onChange={handleChange}
                        />
                        <input
                            type="checkbox"
                            name="esterilizado"
                            id="esterilizado"
                            className="p-1 mt-4 mb-3 border border-black"
                            checked={animalData.esterilizado}
                            onChange={handleChange}
                        />
                        Esterilizado
                        <input
                            type="checkbox"
                            name="zoocan"
                            id="zoocan"
                            className="p-1 mt-4 mb-3 border border-black"
                            checked={animalData.zoocan}
                            onChange={handleChange}
                        />
                        Alta Zoocan
                        <input
                            type="checkbox"
                            name="cartilla"
                            id="cartilla"
                            className="p-1 mt-4 mb-3 border border-black"
                            checked={animalData.cartilla}
                            onChange={handleChange}
                        />
                        Tiene Cartilla
                        <input
                            type="date"
                            name="desparasitacion"
                            id="desparasitacion"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.desparasitacion}
                            onChange={handleChange}
                        />
                        Desparasitacion
                        <input
                            type="date"
                            name="fecha_fallecimiento"
                            id="fecha_fallecimiento"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.fecha_fallecimiento}
                            onChange={handleChange}
                        />
                        Fecha de Fallecimiento
                        <textarea
                            name="historial_clinico"
                            id="historial_clinico"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.historial_clinico}
                            onChange={handleChange}
                        />
                        Historial Clínico
                        <textarea
                            name="superpoder"
                            id="superpoder"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.superpoder}
                            onChange={handleChange}
                        />
                        Superpoder
                        <textarea
                            name="descripcion"
                            id="descripcion"
                            className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
                            value={animalData.descripcion}
                            onChange={handleChange}
                        />
                        Descripción
                        <div className="mx-auto flex flex-row justify-around">
                            <button onClick={handleEdit} className="mx-auto p-2 bg-[#26dd9a] rounded-md border border-black mt-2 hover:scale-105 transition-all">
                                Confirmar
                            </button>
                            <button onClick={() => setIsEditing(!isEditing)} className="mx-auto ms-2 p-2 bg-red-600 rounded-md border border-black mt-2 hover:scale-105 transition-all">
                                Cancelar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                        <p>Fecha de esterilización: {animalData.fecha_esterilizacion}</p>
                        <p>Esterilizado?: {animalData.esterilizado ? 'Sí' : 'No'}</p>
                        <p>Fecha de Llegada al refugio: {animalData.fecha_llegada}</p>
                        <p>Dado de alta en Zoocan?: {animalData.zoocan ? 'Sí' : 'No'}</p>
                        <p>Fecha de nacimiento: {animalData.fecha_nacimiento}</p>
                        <p>Tiene cartilla?: {animalData.cartilla ? 'Sí' : 'No'}</p>
                        <p>Raza: {animalData.raza}</p>
                        <p>Tipo de Animal: {animalData.tipo}</p>
                        <p>Nº Microchip: {animalData.microchip}</p>
                        <p>Fecha de fallecimiento: {animalData.fecha_fallecimiento}</p>
                        <p>Desparasitacion: {animalData.desparasitacion}</p>
                        <div className="text-center mt-4">
                            <h3 className="font-bold">Historial Médico</h3>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                            <p>Fecha de fallecimiento: {animalData.fecha_fallecimiento}</p>
                            <p>Desparasitacion: {animalData.desparasitacion}</p>
                        </div>
                        <div className="mt-2">
                            <h4 className="font-bold">Fecha de Vacunación</h4>
                            {animalData.vacunas && animalData.vacunas.map((vacuna, index) => (
                                <p key={index}>{vacuna.name}: {vacuna.fecha}</p>
                            ))}
                        </div>
                        <div className="mt-2">
                            <h4 className="font-bold">Historial Clínico</h4>
                            <p>{animalData.historial_clinico}</p>
                        </div>
                        <div className="mt-2">
                            <h4 className="font-bold">Superpoder</h4>
                            <p>{animalData.superpoder}</p>
                        </div>
                        <div className="mt-2">
                            <h4 className="font-bold">Descripción</h4>
                            <p>{animalData.descripcion}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AnimalDesplegable;
