import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../index.css";

function VoluntarioDesplegable({ datos }) {
	const [desplegado, setDesplegado] = useState(false);

	const [volunteerData, setVolunteerData] = useState(datos);

	const handleEdit = () => {};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setVolunteerData({
			...volunteerData,
			[name]: value,
		});
	};

	return (
		<div className=" bg-[#d9d9d9] border border-black rounded-md mt-3 p-2">
			<div className=" flex justify-between px-2 w-full ">
				<h2 className="font-bold text-lg">
					{volunteerData.nombre + " " + volunteerData.apellido}
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
				<input
					type="text"
					name="nombre"
					id="nombre"
					className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
					value={volunteerData.nombre}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="apellido"
					id="apellido"
					className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
					value={volunteerData.apellido}
				/>
				<input
					type="email"
					name="email"
					id="email"
					className="p-1 rounded-lg border border-black mt-1 w-[90%] mx-auto"
					value={volunteerData.email}
					onChange={(e) => handleChange(e)}
				/>
				<div className="mx-auto flex flex-row justify-around">
					<button className="mx-auto p-2 bg-[#26dd9a] rounded-md border border-black mt-2 hover:scale-105 transition-all">
						Confirmar
					</button>
					<button
						onClick={() => setDesplegado(!desplegado)}
						className="mx-auto ms-2 p-2 bg-red-600 rounded-md border border-black mt-2 hover:scale-105 transition-all"
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
}

export default VoluntarioDesplegable;
