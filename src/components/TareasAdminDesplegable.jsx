import axios from "axios";
import { cookieLink, updateTareas } from "../data/data";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

function TareasAdminDesplegable({ datos, voluntarios, animales }) {
	const [desplegado, setDesplegado] = useState(false);

	const [tareaData, setTareaData] = useState(datos);
	const [voluntarioData, setVoluntarioData] = useState(voluntarios);
	const [animalesData, setAnimalesData] = useState(animales);

	const [preTareaData, setPreTareaData] = useState(datos);

	const handleEdit = () => {
		console.log("intentado editar");
		console.log("peticion ruta: " + updateTareas + tareaData.id);
		axios.get(cookieLink).then(function () {
			axios
				.put(updateTareas + tareaData.id, tareaData)
				.then(setPreTareaData(tareaData))
				.catch((error) => console.log(error));
		});
	};

	const handleClose = () => {
		setTareaData(preTareaData);
		setDesplegado(!desplegado);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setTareaData({
			...tareaData,
			[name]: value,
		});
	};

	const handleCheckbox = (event) => {
		const checked = event.target;
		if (checked) {
			setTareaData({
				...tareaData,
				SeRepite: 1,
			});
			event.target.checked = false;
		} else {
			setTareaData({
				...tareaData,
				SeRepite: 0,
			});
			event.target.checked = true;
		}
		console.log(tareaData);
	};

	const handleCheckbox2 = (event) => {
		const checked = event.target;
		if (checked) {
			setTareaData({
				...tareaData,
				finalizada: 1,
			});
			event.target.checked = false;
		} else {
			setTareaData({
				...tareaData,
				finalizada: 0,
			});
			event.target.checked = true;
		}
		console.log(tareaData);
	};

	function handleDates(newFecha) {
		const fecha = new Date(newFecha);

		const año = fecha.getFullYear();
		const mes = fecha.getMonth() + 1; // Los meses en JavaScript se cuentan desde 0, por lo que hay que sumar 1
		const dia = fecha.getDate();

		const fechaFormateada = `${año}-${mes.toString().padStart(2, "0")}-${dia
			.toString()
			.padStart(2, "0")}`;

		return fechaFormateada;
	}

	return (
		<div className=" bg-[#d9d9d9] border border-black rounded-md mt-3 p-2">
			<div className=" flex justify-between px-2 w-full ">
				<h2 className="font-bold text-lg">{tareaData.nombre}</h2>
				<button
					className={`${
						desplegado ? "flex flex-col" : "hidden"
					} mx-auto p-1 mb-2 bg-red-600 text-white rounded-md border border-black hover:scale-105 transition-all`}
					onClick={() => ""}
				>
					Eliminar
				</button>
				<button onClick={() => setDesplegado(!desplegado)}>
					{desplegado ? <FaAngleUp /> : <FaAngleDown />}
				</button>
			</div>
			<div
				className={`${
					desplegado ? "flex flex-col" : "hidden"
				} border-t border-black`}
			>
				<label htmlFor="nombre" className="font-bold text-xl text-center">
					Nombre
				</label>
				<input
					type="text"
					name="nombre"
					id="nombre"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={tareaData.nombre}
					onChange={handleChange}
				/>
				<label htmlFor="apellido" className="font-bold text-xl text-center">
					Descripcion
				</label>
				<textarea
					type="text"
					name="descripcion"
					id="descripcion"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto resize-none"
					onChange={handleChange}
					value={tareaData.descripcion}
				/>
				<div className="mx-auto mt-1 mb-1">
					<label htmlFor="email" className="font-bold text-xl text-center">
						Se repite
					</label>
					<input
						type="checkbox"
						name="SeRepite"
						id="SeRepite"
						className="ms-2"
						checked={
							tareaData.SeRepite == 1 || tareaData.SeRepite == true
								? true
								: false
						}
						onChange={handleCheckbox}
					/>
				</div>
				<label htmlFor="telefono" className="font-bold text-xl text-center">
					Fecha
				</label>
				<input
					type="date"
					name="fecha"
					id="fecha"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={handleDates(tareaData.fecha)}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor="comentario" className="font-bold text-xl text-center">
					Comentario
				</label>
				<input
					type="text"
					name="comentario"
					id="comentario"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={tareaData.comentario}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor="video" className="font-bold text-xl text-center">
					Video
				</label>
				<input
					type="text"
					name="url"
					id="url"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={tareaData.url}
					onChange={(e) => handleChange(e)}
				/>
				<div className="mx-auto mt-1 mb-1">
					<label htmlFor="email" className="font-bold text-xl text-center">
						Finalizada
					</label>
					<input
						type="checkbox"
						name="finalizada"
						id="finalizada"
						className="ms-2"
						checked={
							tareaData.finalizada == 1 || tareaData.finalizada == true
								? true
								: false
						}
						onChange={handleCheckbox2}
					/>
				</div>
				<label htmlFor="user" className="font-bold text-xl text-center">
					Voluntario relacionado
				</label>
				<select
					name="voluntario_id"
					id="voluntario_id"
					value={tareaData.voluntario_id}
					onChange={(e) => handleChange(e)}
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
				>
					<option value={null}>Ninguno</option>
					{voluntarioData.map((voluntario, index) => (
						<option key={index} value={voluntario.id}>
							{voluntario.nombre}
						</option>
					))}
				</select>
				<label htmlFor="animal" className="font-bold text-xl text-center">
					Animal relacionado
				</label>
				<select
					name="animal_id"
					id="animal_id"
					value={tareaData.animal_id}
					onChange={(e) => handleChange(e)}
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
				>
					<option value={null}>Ninguno</option>
					{animalesData.map((animals, index) => (
						<option key={index} value={animals.id}>
							{animals.nombre}
						</option>
					))}
				</select>
				<div className="mx-auto flex flex-row justify-around">
					<button
						onClick={() => handleEdit()}
						className="mx-auto p-2 bg-[#26dd9a] rounded-md border border-black mt-2 hover:scale-105 transition-all"
					>
						Confirmar
					</button>
					<button
						onClick={() => handleClose()}
						className="mx-auto ms-2 p-2 bg-red-600 rounded-md border border-black mt-2 hover:scale-105 transition-all"
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}

export default TareasAdminDesplegable;
