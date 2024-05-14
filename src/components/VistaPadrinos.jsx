import { useEffect, useState } from "react";
import "../index.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { cookieLink, getAllUsers, getPadrinos } from "../data/data";
import axios from "axios";
import PadrinoDesplegable from "./PadrinoDesplegable";

function VistaPadrinos() {
	const [padrinos, setPadrino] = useState([]);

	const [usuarios, setUsuarios] = useState([]);

	const [newPadrino, setNewPadrino] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios
			.get(cookieLink)
			.then(function (response) {
				axios.post(getPadrinos, newPadrino, {
					headers: {
						"X-CSRF-TOKEN": response.data.token, // Fetch CSRF token asynchronously
						Authorization: `Bearer ${userToken}`,
						"Content-Type": "application/json",
					},
				});
			})
			.then(function (response1) {
				setPadrino(...padrinos, response1.data);
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewPadrino({
			...newPadrino,
			[name]: value,
		});
	};

	useEffect(() => {
		const userToken = JSON.parse(localStorage.getItem("token"));
		axios.get(cookieLink).then(function (response) {
			axios.get(getAllUsers).then(function (response) {
				setUsuarios(response.data.users);
				console.log(response.data.users);
			});
			axios
				.get(getPadrinos, {
					headers: {
						"X-CSRF-TOKEN": response.data.token, // Fetch CSRF token asynchronously
						Authorization: `Bearer ${userToken}`,
						"Content-Type": "application/json",
					},
				})
				.then(function (response) {
					console.log(response);
					setPadrino(response.data);
				});
		});
	}, []);

	return (
		<div className=" flex flex-row">
			<div className="hidden lg:block w-3/12 p-2 border-e-2 border-black">
				<div className="w-full">
					<form
						className="h-full w-full bg-[#d9d9d9] flex flex-col border border-black rounded-lg p-2"
						onSubmit={(e) => handleSubmit(e)}
					>
						<label className="font-bold text-xl mt-2" htmlFor="nombre">
							Nombre
						</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newPadrino.nombre}
						/>
						<label className="font-bold text-xl mt-2" htmlFor="apellido">
							Apellido
						</label>
						<input
							type="text"
							name="apellido"
							id="apellido"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newPadrino.apellido}
						/>
						<label className="font-bold text-xl mt-2" htmlFor="mail">
							Correo Electronico
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newPadrino.email}
						/>
						<label className="font-bold text-xl mt-2" htmlFor="telefono">
							Numero de telefono
						</label>
						<input
							type="text"
							name="telefono"
							id="telefono"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newPadrino.telefono}
						/>
						<label htmlFor="usuario_id" className="font-bold text-xl mt-2">
							Usuario (opcional)
						</label>
						<select
							name="user_id"
							id="user_id"
							className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
							onChange={(e) => handleChange(e)}
							value={newPadrino.user_id}
						>
							<option value={null}>Ninguno</option>
							{usuarios.map((users) => (
								<option key={users.id} value={users.id}>
									{users.name}
								</option>
							))}
						</select>
						<input
							type="submit"
							value="Confirmar"
							className="rounded-xl p-1 bg-[#26dd9a] border border-black w-1/2 mx-auto mt-4 font-bold"
						/>
					</form>
				</div>
				<div className="bg-[#d9d9d9] mt-3 rounded-lg h-80 border border-black">
					{/* <Pie id="" data={dataForPie} /> */}
				</div>
			</div>
			<div className="hidden lg:block w-full">
				<h2 className="text-2xl font-bold text-center">Padrinos</h2>
				<div className="w-full p-1 flex flex-row">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Busqueda por nombre y apellido"
						className="bg-[#f4f0f0] rounded-md p-2 border border-black w-[100%] mt-1"
					/>
					<button className="-ms-7">
						<FaMagnifyingGlass />
					</button>
				</div>
				<div className="overflow-y-scroll ps-2">
					{padrinos.map((padrino, index) => (
						<PadrinoDesplegable
							datos={padrino}
							usuarios={usuarios}
							key={index}
						/>
					))}
				</div>
			</div>
			<div className="lg:hidden w-full">
				<div className="flex flex-col w-full justify-center p-2">
					<div className="collapse bg-[#26dd9a] border border-black">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium text-center">
							Desplegar para añadir Voluntari@
						</div>
						<div className="collapse-content bg-[#f4f0f0] p-1">
							<form
								className="h-full w-full bg-transparent flex flex-col border border-black rounded-lg p-2"
								onSubmit={(e) => handleSubmit(e)}
							>
								<label className="font-bold text-xl mt-2" htmlFor="nombre">
									Nombre
								</label>
								<input
									type="text"
									name="nombre"
									id="nombre"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newPadrino.nombre}
								/>
								<label className="font-bold text-xl mt-2" htmlFor="apellido">
									Apellido
								</label>
								<input
									type="text"
									name="apellido"
									id="apellido"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newPadrino.apellido}
								/>
								<label className="font-bold text-xl mt-2" htmlFor="mail">
									Correo Electronico
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newPadrino.email}
								/>
								<label className="font-bold text-xl mt-2" htmlFor="telefono">
									Numero de telefono
								</label>
								<input
									type="text"
									name="telefono"
									id="telefono"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newPadrino.telefono}
								/>
								<label htmlFor="user_id" className="font-bold text-xl mt-2">
									Usuario (opcional)
								</label>
								<select
									name="usuario_id"
									id="usuario_id"
									className="border border-black rounded-md shadow-md p-1 bg-[#f4f0f0] mt-1"
									onChange={(e) => handleChange(e)}
									value={newPadrino.usuario_id}
								>
									<option value={null}>Ninguno</option>
									{usuarios.map((users) => (
										<option key={users.id} value={users.id}>
											{users.name}
										</option>
									))}
								</select>
								<input
									type="submit"
									value="Confirmar"
									className="rounded-xl p-1 bg-[#26dd9a] border border-black w-1/2 mx-auto mt-4 font-bold"
								/>
							</form>
						</div>
					</div>
				</div>
				<div>
					<h2 className="mb-1 mt-2 text-2xl font-bold ms-4">
						Usuarios existentes:
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
					<div className="overflow-y-scroll ps-2">
						{padrinos.map((padrino, index) => (
							<PadrinoDesplegable
								datos={padrino}
								usuarios={usuarios}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default VistaPadrinos;
