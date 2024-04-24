import { useState } from "react";
import "../index.css";
import { passwordLink } from "../data/data";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

function App() {
	// logica para el inicio de sesion y el fallo de inicio de sesion
	const params = useParams();
	const username = params.username;

	const [userData, setUserData] = useState({
		password: "",
		repitPassword: "",
		username: username,
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault;
		axios
			.post(passwordLink, userData)
			.then(function (response) {
				toast.success("Inicio de sesión exitoso", {
					autoClose: 900,
					theme: "colored",
				});
				setTimeout(() => {
					window.location.href = "/main"; // Redirige a la página deseada después de los 900ms
				}, 1550);
				localStorage.setItem(
					"token",
					JSON.stringify(response.response.data.token)
				);
			})
			.catch(function (error) {
				console.error("Error al iniciar sesión:", error);
				toast.error(
					"Error al intentar iniciar sesión. Por favor, intenta de nuevo.",
					{
						style: {
							height: "110px",
							fontSize: "1.2rem",
							autoClose: 1000,
						}, // Ajusta el tamaño del contenedor del mensaje
					}
				);
			});
	};

	return (
		<div className=" w-screen h-screen bg-gradient-to-bl from-[#ffeb35] via-[#ffd700] to-[#ffffff]">
			<div className="lg:hidden flex w-full h-full justify-center items-center">
				<div>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col bg-[#ffeb3b] p-3 rounded-lg border border-yellow-300 shadow-md"
					>
						<img
							src="/logo-animal.png"
							alt="logo"
							className="rounded-full w-46 h-46 bg-[#ffeb3b] -mt-44 -mb-20"
						/>
						<label
							htmlFor="user"
							className="font-bold w-full text-2xl flex items-center"
						>
							Introduce una Contraseña
						</label>
						<input
							type="password"
							onChange={handleChange}
							value={userData.password}
							name="password"
							id="password"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-2 mt-2"
						/>
						<label
							htmlFor="repitPassword"
							className="font-bold w-full text-2xl flex items-center"
						>
							Repite la Contraseña
						</label>
						<input
							type="password"
							onChange={handleChange}
							value={userData.repitPasswordpassword}
							name="repitPassword"
							id="repitPassword"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-2 mt-2"
						/>
						<input type="hidden" name="username" value={username} />
						<input
							type="submit"
							value="Confirmar"
							className="bg-[#26dd9a] p-2 rounded-xl w-2/5 mx-auto font-bold border border-black shadow-md hover:scale-105 transition-all cursor-pointer"
						/>
					</form>
				</div>
			</div>
			<div className=" hidden lg:flex flex-row h-full items-center justify-around">
				<img
					src="/logo-animal-large.png"
					className="lg:w-2/5 h-5/5 xl:w-1/3 xl:h-2/3"
					alt="logo"
				/>
				<div className="w-1/2 h-4/7 flex justify-center items-center">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col bg-[#ffeb3b] p-3 rounded-lg border border-black shadow-md w-3/5 h-3/5 mx-auto"
					>
						<label
							htmlFor="username"
							className="font-bold w-full text-3xl flex items-center"
						>
							Introduce una Contraseña
						</label>
						<input
							type="password"
							name="password"
							onChange={handleChange}
							value={userData.password}
							id="user"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-3 mt-3"
						/>
						<label
							htmlFor="repitPassword"
							className="font-bold w-full text-3xl flex items-center"
						>
							Repite la Contraseña
						</label>
						<input
							type="password"
							name="repitPassword"
							onChange={handleChange}
							value={userData.repitPassword}
							id="repitpassword"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-3 mt-3"
						/>
						<input
							type="submit"
							value="Confirmar"
							className="bg-[#26dd9a] p-2 rounded-xl h-16 mt-2 w-2/5 mx-auto font-bold border border-black shadow-md hover:scale-105 transition-all cursor-pointer focus:bg-[#6affc8]"
						/>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default App;
