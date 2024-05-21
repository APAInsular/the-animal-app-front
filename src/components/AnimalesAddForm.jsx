import "../index.css";
import { useState } from "react";
import axios from "axios";
import { animalsLink } from "../data/data";
import { BiPlus } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";

function AnimalesAddForm() {
	const [formData, setFormData] = useState({
		nombre: "",
		historia: "",
		especie: "",
		alimentacion: "",
		cuidados: "",
		necesidades: "",
		esterilizado: false,
		zoocan: false,
		cartilla: false,
		desparasitacion: "",
		fecha_nacimiento: "",
		fecha_esterilizacion: "",
		fecha_llegada: "",
		fecha_fallecimiento: "",
		raza: "",
		tipo: "",
		microchip: "",
		superpoder: "",
		historiales_medicos: [],
		vacunaciones: [],
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleHistorialChange = (index, event) => {
		const { name, value } = event.target;
		const historiales_medicos = [...formData.historiales_medicos];
		historiales_medicos[index] = {
			...historiales_medicos[index],
			[name]: value,
		};
		setFormData({
			...formData,
			historiales_medicos,
		});
	};

	const handleVacunacionChange = (index, event) => {
		const { name, value } = event.target;
		const vacunaciones = [...formData.vacunaciones];
		vacunaciones[index] = {
			...vacunaciones[index],
			[name]: value,
		};
		setFormData({
			...formData,
			vacunaciones,
		});
	};

	const addHistorialMedico = () => {
		setFormData({
			...formData,
			historiales_medicos: [
				...formData.historiales_medicos,
				{ fecha: "", descripcion: "" },
			],
		});
	};

	const addVacunacion = () => {
		setFormData({
			...formData,
			vacunaciones: [
				...formData.vacunaciones,
				{ nombre: "", fecha: "" },
			],
		});
	};

	const removeHistorialMedico = (index) => {
		const historiales_medicos = formData.historiales_medicos.filter(
			(_, i) => i !== index
		);
		setFormData({
			...formData,
			historiales_medicos,
		});
	};

	const removeVacunacion = (index) => {
		const vacunaciones = formData.vacunaciones.filter(
			(_, i) => i !== index
		);
		setFormData({
			...formData,
			vacunaciones,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(animalsLink, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log("Animal creado exitosamente:", response.data);
		} catch (error) {
			console.error("Error al crear el animal:", error.response.data);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg space-y-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="flex flex-col">
					<label htmlFor="nombre" className="font-bold mb-1">Nombre</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						value={formData.nombre}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="fecha_esterilizacion" className="font-bold mb-1">Fecha Esterilización</label>
					<input
						type="date"
						name="fecha_esterilizacion"
						id="fecha_esterilizacion"
						value={formData.fecha_esterilizacion}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="fecha_nacimiento" className="font-bold mb-1">Fecha Nacimiento</label>
					<input
						type="date"
						name="fecha_nacimiento"
						id="fecha_nacimiento"
						value={formData.fecha_nacimiento}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="foto" className="font-bold mb-1">Foto del Animal</label>
					<input
						type="file"
						name="foto"
						id="foto"
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="fecha_llegada" className="font-bold mb-1">Fecha Llegada</label>
					<input
						type="date"
						name="fecha_llegada"
						id="fecha_llegada"
						value={formData.fecha_llegada}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="fecha_fallecimiento" className="font-bold mb-1">Fecha Fallecimiento</label>
					<input
						type="date"
						name="fecha_fallecimiento"
						id="fecha_fallecimiento"
						value={formData.fecha_fallecimiento}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="raza" className="font-bold mb-1">Raza</label>
					<input
						type="text"
						name="raza"
						id="raza"
						value={formData.raza}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="tipo" className="font-bold mb-1">Tipo</label>
					<input
						type="text"
						name="tipo"
						id="tipo"
						value={formData.tipo}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="microchip" className="font-bold mb-1">Nº Microchip</label>
					<input
						type="text"
						name="microchip"
						id="microchip"
						value={formData.microchip}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<label htmlFor="esterilizado" className="font-bold mb-1">Esterilizado</label>
					<input
						type="checkbox"
						name="esterilizado"
						id="esterilizado"
						checked={formData.esterilizado}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none mt-2"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<label htmlFor="zoocan" className="font-bold mb-1">Alta Zoocan</label>
					<input
						type="checkbox"
						name="zoocan"
						id="zoocan"
						checked={formData.zoocan}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none mt-2"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<label htmlFor="cartilla" className="font-bold mb-1">Cartilla</label>
					<input
						type="checkbox"
						name="cartilla"
						id="cartilla"
						checked={formData.cartilla}
						onChange={handleChange}
						className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none mt-2"
					/>
				</div>
			</div>


			<div className="flex flex-col mt-4">
				<label htmlFor="especie" className="font-bold mb-1">Especie</label>
				<textarea
					name="especie"
					id="especie"
					value={formData.especie}
					onChange={handleChange}
					className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					rows="2"
				></textarea>
			</div>

			<div className="flex flex-col mt-4">
				<label htmlFor="alimentacion" className="font-bold mb-1">Alimentación</label>
				<textarea
					name="alimentacion"
					id="alimentacion"
					value={formData.alimentacion}
					onChange={handleChange}
					className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					rows="2"
				></textarea>
			</div>

			<div className="flex flex-col mt-4">
				<label htmlFor="cuidados" className="font-bold mb-1">Cuidados</label>
				<textarea
					name="cuidados"
					id="cuidados"
					value={formData.cuidados}
					onChange={handleChange}
					className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					rows="2"
				></textarea>
			</div>

			<div className="flex flex-col mt-4">
				<label htmlFor="necesidades" className="font-bold mb-1">Necesidades</label>
				<textarea
					name="necesidades"
					id="necesidades"
					value={formData.necesidades}
					onChange={handleChange}
					className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					rows="2"
				></textarea>
			</div>

			<div className="flex flex-col mt-4">
				<label htmlFor="superpoder" className="font-bold mb-1">Superpoder</label>
				<textarea
					name="superpoder"
					id="superpoder"
					value={formData.superpoder}
					onChange={handleChange}
					className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
					rows="2"
				></textarea>
			</div>

			<div className="mt-4">
				<h3 className="text-lg font-semibold mb-2">Historial Médico</h3>
				{formData.historiales_medicos.map((historial, index) => (
					<div key={index} className="flex flex-col md:flex-row items-center gap-2 mb-2">
						<input
							type="date"
							name="fecha"
							value={historial.fecha}
							onChange={(event) => handleHistorialChange(index, event)}
							className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none w-full md:w-auto"
						/>
						<input
							type="text"
							name="descripcion"
							placeholder="Descripción"
							value={historial.descripcion}
							onChange={(event) => handleHistorialChange(index, event)}
							className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none w-full"
						/>
						<button
							type="button"
							onClick={() => removeHistorialMedico(index)}
							className="p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
						>
							<TbTrash size={20} />
						</button>
					</div>
				))}
				<button
					type="button"
					onClick={addHistorialMedico}
					className="p-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors flex items-center"
				>
					<BiPlus size={20} className="mr-1" />
					Añadir Historial Médico
				</button>
			</div>

			<div className="mt-4">
				<h3 className="text-lg font-semibold mb-2">Vacunaciones</h3>
				{formData.vacunaciones.map((vacunacion, index) => (
					<div key={index} className="flex flex-col md:flex-row items-center gap-2 mb-2">
						<input
							type="text"
							name="nombre"
							placeholder="Nombre de la vacuna"
							value={vacunacion.nombre}
							onChange={(event) => handleVacunacionChange(index, event)}
							className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none w-full md:w-auto"
						/>
						<input
							type="date"
							name="fecha"
							value={vacunacion.fecha}
							onChange={(event) => handleVacunacionChange(index, event)}
							className="p-2 rounded-lg shadow-md border border-gray-300 focus:border-indigo-500 focus:outline-none w-full"
						/>
						<button
							type="button"
							onClick={() => removeVacunacion(index)}
							className="p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
						>
							<TbTrash size={20} />
						</button>
					</div>
				))}
				<button
					type="button"
					onClick={addVacunacion}
					className="p-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors flex items-center"
				>
					<BiPlus size={20} className="mr-1" />
					Añadir Vacunación
				</button>
			</div>

			<button
				type="submit"
				className="w-full p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
			>
				Guardar
			</button>
		</form>
	);
}

export default AnimalesAddForm;
