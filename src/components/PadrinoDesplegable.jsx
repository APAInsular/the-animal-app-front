import axios from "axios";
import { cookieLink, updatePadrinos } from "../data/data";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function PadrinoDesplegable({ datos, usuarios }) {
	const [desplegado, setDesplegado] = useState(false);

	const [padrinoData, setPadrinoData] = useState(datos);

	const [usersData, setUsersData] = useState(usuarios);

	const [prePadrinoData, setPrePadrinoData] = useState(datos);

	const handleEdit = () => {
		console.log("intentado editar");
		console.log("peticion ruta: " + updatePadrinos + padrinoData.id);
		axios.get(cookieLink).then(function () {
			axios
				.put(updatePadrinos + padrinoData.id, padrinoData)
				.then(setPrePadrinoData(padrinoData))
				.catch((error) => console.log(error));
		});
	};

	const handleClose = () => {
		setPadrinoData(prePadrinoData);
		setDesplegado(!desplegado);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setPadrinoData({
			...padrinoData,
			[name]: value,
		});
	};

	return (
		<div className=" bg-[#d9d9d9] border border-black rounded-md mt-3 p-2">
			<div className=" flex justify-between px-2 w-full ">
				<h2 className="font-bold text-lg">
					{padrinoData.nombre + " " + padrinoData.apellido}
				</h2>
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
					value={padrinoData.nombre}
					onChange={handleChange}
				/>
				<label htmlFor="apellido" className="font-bold text-xl text-center">
					Apellido
				</label>
				<input
					type="text"
					name="apellido"
					id="apellido"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					onChange={handleChange}
					value={padrinoData.apellido}
				/>
				<label htmlFor="email" className="font-bold text-xl text-center">
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={padrinoData.email}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor="telefono" className="font-bold text-xl text-center">
					Telefono
				</label>
				<input
					type="text"
					name="telefono"
					id="telefono"
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
					value={padrinoData.telefono}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor="user" className="font-bold text-xl text-center">
					Usuario relacionado (opcional)
				</label>
				<select
					name="user_id"
					id="user_id"
					value={padrinoData.user_id}
					onChange={(e) => handleChange(e)}
					className="border border-black rounded-md shadow-md p-1 mt-1 bg-[#f4f0f0] w-[90%] mx-auto"
				>
					<option value={null}>Ninguno</option>
					{usersData.map((users, index) => (
						<option key={index} value={users.id}>
							{users.name}
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

export default PadrinoDesplegable;
