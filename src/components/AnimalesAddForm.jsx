import "../index.css";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";

function AnimalesAddForm() {
	const [vacunas, setVacunas] = useState([]);

	// Ejemplo objeto vacuna
	// {
	//     name: "distemper",
	//     uuid: "uuid generico",
	//     fecha: "10/11/2024"
	// }

	const handleNewVacuna = (e) => {
		console.log("agregando vacuna");
		e.preventDefault();
		setVacunas((prevVacunas) => [
			...prevVacunas,
			{ name: "", uuid: Crypto.randomUUID(), fecha: Date.now() },
		]);
	};

	const handleDeleteOldVacuna = (uuid) => {
		console.log("algo");
	};

	return (
		<form action="" className="flex flex-col">
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="name" className="font-bold">
						Nombre
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="est-fecha" className="font-bold">
						Fecha Esterilizacion
					</label>
					<input
						type="date"
						name="est-fecha"
						id="est-fecha"
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="nac-fecha" className="font-bold">
						Fecha Nacimiento
					</label>
					<input
						type="date"
						name="nac-fecha"
						id="nac-fecha"
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
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="llegada-fecha" className="font-bold">
						Fecha llegada
					</label>
					<input
						type="date"
						name="llegada-fecha"
						id="llegada-fecha"
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
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1 justify-center">
					<label htmlFor="raza" className="font-bold">
						Esterilizado
					</label>
					<input
						type="checkbox"
						name="esterilizado"
						id="esterilizado"
						className="p-1 mt-4 mb-3 border border-black"
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="tipo" className="font-bold">
						Alta Zoocan
					</label>
					<input
						type="checkbox"
						name="zoocan"
						id="zoocan"
						className="p-1 mt-4 mb-3 border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="microchip" className="font-bold">
						Tiene Cartilla
					</label>
					<input
						type="checkbox"
						name="cartilla"
						id="cartilla"
						className="p-1 mt-4 mb-3 border border-black"
					/>
				</div>
				<div className="flex flex-col mx-1 justify-center">
					<label htmlFor="raza" className="font-bold">
						Desparasitacion
					</label>
					<input
						type="date"
						name="desparasitacion"
						id="desparastiacion"
						className="p-1 rounded-lg shadow-md border border-black"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<div className="flex flex-row justify-center">
					<h2 className="font-bold text-lg">Fecha de Vacunacion</h2>
					<button
						className="p-2 border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
						onClick={() => {
							handleNewVacuna();
						}}
					>
						<BiPlus />
					</button>
				</div>
				<div className="flex justify-center">
					{vacunas.map((vacuna) => (
						<div key={vacuna.uuid} className="">
							<div className="flex flex-row">
								<input type="text" name={vacuna.uuid} id={vacuna.uuid} />
								<button
									type="button"
									className="border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
									onClick={() => handleDeleteOldVacuna(vacuna.uuid)}
								>
									<TbTrash />
								</button>
							</div>
							<input
								type="date"
								name={vacuna.uuid}
								id={vacuna.uuid}
								value={vacuna.fecha}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col mt-2">
				<h2 className="mx-auto text-lg font-bold">Historial Clinico</h2>
				<textarea
					name="historial"
					id="historial"
					cols="20"
					rows="10"
					className="border border-black rounded-md shadow-md mx-auto w-4/12 p-1 bg-white h-24 mt-1 resize-none"
				></textarea>
			</div>
			<div className="flex flex-col mt-2">
				<h2 className="mx-auto text-lg font-bold">SuperPoder</h2>
				<textarea
					name="superpoder"
					id="superpoder"
					cols="20"
					rows="10"
					className="border border-black rounded-md shadow-md mx-auto w-4/12 p-1 bg-white h-24 mt-1 resize-none"
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
				></textarea>
			</div>
		</form>
	);
}

export default AnimalesAddForm;
