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
		<form onSubmit={handleSubmit} className="flex flex-col">
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="nombre" className="font-bold">
						Nombre
					</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						value={formData.nombre}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="fecha_esterilizacion" className="font-bold">
						Fecha Esterilización
					</label>
					<input
						type="date"
						name="fecha_esterilizacion"
						id="fecha_esterilizacion"
						value={formData.fecha_esterilizacion}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="fecha_nacimiento" className="font-bold">
						Fecha Nacimiento
					</label>
					<input
						type="date"
						name="fecha_nacimiento"
						id="fecha_nacimiento"
						value={formData.fecha_nacimiento}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="foto" className="font-bold">
						Foto del Animal
					</label>
					<input
						type="file"
						name="foto"
						id="foto"
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="fecha_llegada" className="font-bold">
						Fecha Llegada
					</label>
					<input
						type="date"
						name="fecha_llegada"
						id="fecha_llegada"
						value={formData.fecha_llegada}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="fecha_fallecimiento" className="font-bold">
						Fecha Fallecimiento
					</label>
					<input
						type="date"
						name="fecha_fallecimiento"
						id="fecha_fallecimiento"
						value={formData.fecha_fallecimiento}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="raza" className="font-bold">
						Raza
					</label>
					<input
						type="text"
						name="raza"
						id="raza"
						value={formData.raza}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="tipo" className="font-bold">
						Tipo
					</label>
					<input
						type="text"
						name="tipo"
						id="tipo"
						value={formData.tipo}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="microchip" className="font-bold">
						Nº Microchip
					</label>
					<input
						type="text"
						name="microchip"
						id="microchip"
						value={formData.microchip}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1 justify-center">
					<label htmlFor="esterilizado" className="font-bold">
						Esterilizado
					</label>
					<input
						type="checkbox"
						name="esterilizado"
						id="esterilizado"
						checked={formData.esterilizado}
						onChange={handleChange}
						className="p-1 mt-4 mb-3 border border-black"
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="zoocan" className="font-bold">
						Alta Zoocan
					</label>
					<input
						type="checkbox"
						name="zoocan"
						id="zoocan"
						checked={formData.zoocan}
						onChange={handleChange}
						className="p-1 mt-4 mb-3 border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="cartilla" className="font-bold">
						Tiene Cartilla
					</label>
					<input
						type="checkbox"
						name="cartilla"
						id="cartilla"
						checked={formData.cartilla}
						onChange={handleChange}
						className="p-1 mt-4 mb-3 border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="desparasitacion" className="font-bold">
						Desparasitacion
					</label>
					<input
						type="date"
						name="desparasitacion"
						id="desparasitacion"
						value={formData.desparasitacion}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="alimentacion" className="font-bold">
						Alimentación
					</label>
					<input
						type="text"
						name="alimentacion"
						id="alimentacion"
						value={formData.alimentacion}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="cuidados" className="font-bold">
						Cuidados
					</label>
					<input
						type="text"
						name="cuidados"
						id="cuidados"
						value={formData.cuidados}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="necesidades" className="font-bold">
						Necesidades
					</label>
					<input
						type="text"
						name="necesidades"
						id="necesidades"
						value={formData.necesidades}
						onChange={handleChange}
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<div className="flex flex-row justify-center">
					<h2 className="font-bold text-lg">Historial Médico</h2>
					<button
						type="button"
						className="p-2 border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
						onClick={addHistorialMedico}
					>
						<BiPlus />
					</button>
				</div>
				{formData.historiales_medicos.map((historial, index) => (
					<div key={index} className="flex flex-col my-2">
						<div className="flex flex-row items-center">
							<label htmlFor={`historial_fecha_${index}`} className="font-bold mr-2">
								Fecha
							</label>
							<input
								type="date"
								name="fecha"
								id={`historial_fecha_${index}`}
								value={historial.fecha}
								onChange={(event) => handleHistorialChange(index, event)}
								className="p-1 rounded-lg shadow-md border border-black"
							/>
							<button
								type="button"
								className="p-1 border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
								onClick={() => removeHistorialMedico(index)}
							>
								<TbTrash />
							</button>
						</div>
						<label htmlFor={`historial_descripcion_${index}`} className="font-bold mt-2">
							Descripción
						</label>
						<textarea
							name="descripcion"
							id={`historial_descripcion_${index}`}
							value={historial.descripcion}
							onChange={(event) => handleHistorialChange(index, event)}
							className="p-1 rounded-lg shadow-md border border-black mt-1"
						/>
					</div>
				))}
			</div>
			<div className="flex flex-col justify-center">
				<div className="flex flex-row justify-center">
					<h2 className="font-bold text-lg">Vacunaciones</h2>
					<button
						type="button"
						className="p-2 border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
						onClick={addVacunacion}
					>
						<BiPlus />
					</button>
				</div>
				{formData.vacunaciones.map((vacunacion, index) => (
					<div key={index} className="flex flex-col my-2">
						<div className="flex flex-row items-center">
							<label htmlFor={`vacunacion_nombre_${index}`} className="font-bold mr-2">
								Nombre
							</label>
							<input
								type="text"
								name="nombre"
								id={`vacunacion_nombre_${index}`}
								value={vacunacion.nombre}
								onChange={(event) => handleVacunacionChange(index, event)}
								className="p-1 rounded-lg shadow-md border border-black"
							/>
							<label htmlFor={`vacunacion_fecha_${index}`} className="font-bold mr-2 ml-2">
								Fecha
							</label>
							<input
								type="date"
								name="fecha"
								id={`vacunacion_fecha_${index}`}
								value={vacunacion.fecha}
								onChange={(event) => handleVacunacionChange(index, event)}
								className="p-1 rounded-lg shadow-md border border-black"
							/>
							<button
								type="button"
								className="p-1 border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
								onClick={() => removeVacunacion(index)}
							>
								<TbTrash />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col mt-2">
				<h2 className="mx-auto text-lg font-bold">SuperPoder</h2>
				<textarea
					name="superpoder"
					id="superpoder"
					cols="20"
					rows="10"
					className="border border-black rounded-md shadow-md mx-auto w-4/12 p-1 bg-white h-24 mt-1 resize-none"
					value={formData.superpoder}
					onChange={handleChange}
				></textarea>
			</div>
			<div className="flex flex-col mt-2">
				<h2 className="mx-auto text-lg font-bold">Descripcion</h2>
				<textarea
					name="descripcion"
					id="descripcion"
					cols="20"
					rows="10"
					className="border border-black rounded-md shadow-md mx-auto w-4/12 p-1 bg-white h-24 mt-1 resize-none"
					value={formData.descripcion}
					onChange={handleChange}
				></textarea>
			</div>
			<div className="flex flex-col mt-2">
				<input
					type="submit"
					value="Crear Animal"
					className="rounded-xl p-2 bg-[#26dd9a] border border-black w-1/2 mx-auto mt-4 font-bold"
				/>
			</div>
		</form>
	);
}

export default AnimalesAddForm;
