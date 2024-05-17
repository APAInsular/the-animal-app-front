import { useEffect, useState } from "react";
import "../index.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import {
	cookieLink,
	getAnimales,
	getTareas,
	getVolunteers,
} from "../data/data";
import TareasAdminDesplegable from "./TareasAdminDesplegable";

function VistaTareas() {
	const [volunteer, setVolunteer] = useState([]);
	const [animal, setAnimal] = useState([]);
	const [tareas, setTareas] = useState([]);

	useEffect(() => {
		axios.get(cookieLink).then(function () {
			// peticion de animales;
			axios.get(getAnimales).then(function (response1) {
				console.log(response1);
				setAnimal(response1.data);
			});
			axios.get(getVolunteers).then(function (response2) {
				console.log(response2);
				setVolunteer(response2.data);
			});
			axios.get(getTareas).then(function (response3) {
				console.log(response3);
				setTareas(response3.data);
			});
		});
	}, []);

	return (
		<div className=" flex flex-row">
			<div className="hidden lg:block w-3/12 p-2 border-e-2 border-black">
				<div className="w-full">
					<form className="h-full w-full bg-[#d9d9d9] flex flex-col border border-black rounded-lg p-2">
						<label className="font-bold text-xl mt-2" htmlFor="name">
							Nombre
						</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
						/>
						<label className="font-bold text-xl mt-2" htmlFor="description">
							Descripcion
						</label>
						<textarea
							name="descripcion"
							id="description"
							cols="20"
							rows="10"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] h-24 mt-1 resize-none"
						></textarea>
						<div className="mt-2">
							<label className="font-bold text-xl" htmlFor="repit">
								Se repite semanalmente
							</label>
							<input
								type="checkbox"
								name="SeRepite"
								id="SeRepite"
								className="ms-4"
							/>
						</div>
						<label className="font-bold text-xl mt-2" htmlFor="date">
							Fecha
						</label>
						<input
							type="date"
							name="fecha"
							id="fecha"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
						/>
						<label className="font-bold text-xl mt-2" htmlFor="volunteer">
							Voluntario
						</label>
						<select
							name="voluntario_id"
							id="voluntario_id"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
						>
							<option value={null}>Escoge</option>
							{volunteer.map((voluntario, index) => (
								<option key={index} value={voluntario.id}>
									{voluntario.nombre}
								</option>
							))}
						</select>
						<label className="font-bold text-xl mt-2" htmlFor="animal">
							Animal
						</label>
						<select
							name="animal_id"
							id="animal_id"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
						>
							<option value={null}>Escoge</option>
							{animal.map((animals, index) => (
								<option key={index} value={animals.id}>
									{animals.nombre}
								</option>
							))}
						</select>
						<input
							type="submit"
							value="Confirmar"
							className="rounded-xl p-1 bg-[#26dd9a] border border-black w-1/2 mx-auto mt-4 font-bold cursor-pointer hover:scale-105 transition-all"
						/>
					</form>
				</div>
				<div className="bg-[#d9d9d9] mt-3 rounded-lg h-64 border border-black">
					{/* <Pie id="" data={dataForPie} /> */}
				</div>
			</div>
			<div className="hidden lg:block w-full">
				<div className="w-full p-1 flex flex-row">
					<input
						type="text"
						name="search"
						id="search"
						className="bg-[#f4f0f0] rounded-md p-2 border border-black w-[100%] mt-1"
					/>
					<button className="-ms-7">
						<FaMagnifyingGlass />
					</button>
				</div>
				<div className="overflow-y-scroll ps-2">
					{/* aqui es donde va lo de usuarios */}
					{tareas.map((task, index) => (
						<TareasAdminDesplegable
							key={index}
							datos={task}
							voluntarios={volunteer}
							animales={animal}
						/>
					))}
				</div>
			</div>
			<div className="lg:hidden w-full">
				<div className="flex flex-col w-full justify-center p-2">
					<div className="collapse bg-[#26dd9a] border border-black">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium text-center">
							Desplegar para añadir Tareas
						</div>
						<div className="collapse-content bg-[#f4f0f0] p-1">
							<form className="h-full w-full bg-transparent flex flex-col border border-black rounded-lg p-2">
								<label className="font-bold text-xl mt-2" htmlFor="name">
									Nombre
								</label>
								<input
									type="text"
									name="nombre"
									id="nombre"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
								/>
								<label className="font-bold text-xl mt-2" htmlFor="description">
									Descripcion
								</label>
								<textarea
									name="descripcion"
									id="description"
									cols="20"
									rows="10"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] h-24 mt-1 resize-none"
								></textarea>
								<div className="mt-2">
									<label className="font-bold text-xl" htmlFor="repit">
										Se repite semanalmente
									</label>
									<input
										type="checkbox"
										name="SeRepite"
										id="SeRepite"
										className="ms-4"
									/>
								</div>
								<label className="font-bold text-xl mt-2" htmlFor="date">
									Fecha
								</label>
								<input
									type="date"
									name="fecha"
									id="fecha"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
								/>
								<label className="font-bold text-xl mt-2" htmlFor="volunteer">
									Voluntario
								</label>
								<select
									name="voluntario_id"
									id="voluntario_id"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
								>
									<option value={null}>Escoge</option>
									{volunteer.map((voluntario, index) => (
										<option key={index} value={voluntario.id}>
											{voluntario.nombre}
										</option>
									))}
								</select>
								<label className="font-bold text-xl mt-2" htmlFor="animal">
									Animal
								</label>
								<select
									name="animal_id"
									id="animal_id"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
								>
									<option value={null}>Escoge</option>
									{animal.map((animals, index) => (
										<option key={index} value={animals.id}>
											{animals.nombre}
										</option>
									))}
								</select>
								<input
									type="submit"
									value="Confirmar"
									className="rounded-xl p-1 bg-[#26dd9a] border border-black w-1/2 mx-auto mt-4 font-bold cursor-pointer hover:scale-105 transition-all"
								/>
							</form>
						</div>
					</div>
				</div>
				<div>
					<h2 className="mb-1 mt-2 text-2xl font-bold ms-4">
						Tareas existentes:
					</h2>
					<div className="w-full p-3 flex flex-row">
						<input
							type="text"
							name="search"
							id="search"
							className="bg-[#f4f0f0] rounded-md p-2 border border-black w-[100%] mt-1"
						/>
						<button className="-ms-7">
							<FaMagnifyingGlass />
						</button>
					</div>
					<div className="overflow-y-scroll ps-3">
						{tareas.map((task, index) => (
							<TareasAdminDesplegable
								key={index}
								datos={task}
								voluntarios={volunteer}
								animales={animal}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default VistaTareas;
