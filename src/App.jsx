import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaKey } from "react-icons/fa";
import { cookieLink, loginLink } from "./data/data";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function App() {
	// logica para el inicio de sesion y el fallo de inicio de sesion

	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.get(cookieLink).then(function (response) {
			localStorage.setItem("csrf", JSON.stringify(response));
		});
		axios
			.post(loginLink, userData)
			.then(function (response) {
				console.log(response);
				toast.success("Inicio de sesión exitoso", {
					autoClose: 900,
					theme: "colored",
				});
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				localStorage.removeItem("voluntario");
				console.log(response.data);
				localStorage.setItem("token", JSON.stringify(response.data.data.token));
				localStorage.setItem("user", JSON.stringify(response.data.data.user));
				localStorage.setItem(
					"voluntario",
					JSON.stringify(response.data.data.volunteer)
				);
				setTimeout(() => {
					if (response.data.data.user.rol_id == 1) {
						window.location.href = "/mainadmin";
					} else {
						window.location.href = "/main";
					} // Redirige a la página deseada después de los 900ms
				}, 1550);
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
							Email <FaUser className="ms-3" />{" "}
						</label>
						<input
							type="email"
							onChange={(e) => handleChange(e)}
							name="email"
							id="user"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-2 mt-2"
						/>
						<label
							htmlFor="password"
							className="font-bold w-full text-2xl flex items-center"
						>
							Contraseña <FaKey className="ms-3" />{" "}
						</label>
						<input
							type="password"
							onChange={(e) => handleChange(e)}
							name="password"
							id="password"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-2 mt-2"
						/>
						<input
							type="submit"
							value="Entrar"
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
				<div className="w-1/2 h-4/6 flex justify-center items-center">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col bg-[#ffeb3b] p-3 rounded-lg border border-black shadow-md w-3/5 h-3/5 mx-auto"
					>
						<h2 className="text-center text-5xl font-bold mb-5">
							Inicia Sesion
						</h2>
						<label
							htmlFor="username"
							className="font-bold w-full text-3xl flex items-center"
						>
							Email <FaUser className="ms-3" />{" "}
						</label>
						<input
							type="email"
							name="email"
							onChange={(e) => handleChange(e)}
							id="user"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-3 mt-3"
						/>
						<label
							htmlFor="password"
							className="font-bold w-full text-3xl flex items-center"
						>
							Contraseña <FaKey className="ms-3" />{" "}
						</label>
						<input
							type="password"
							name="password"
							onChange={(e) => handleChange(e)}
							id="password"
							className="w-full rounded-lg p-2 border border-black shadow-lg mx-auto mb-3 mt-3"
						/>
						<input
							type="submit"
							value="Entrar"
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
