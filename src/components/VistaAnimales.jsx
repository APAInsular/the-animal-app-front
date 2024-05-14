import { useEffect, useState } from "react";
import "../index.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AnimalesAddForm from "./AnimalesAddForm";
import AnimalDesplegable from "./AnimalDesplegable";
import { cookieLink, animalsLink } from "../data/data";
import axios from "axios";

function VistaAnimales() {
	const [animals, setAnimals] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const fetchAnimals = async () => {
		try {
			const userToken = JSON.parse(localStorage.getItem("token"));
			const csrfResponse = await axios.get(cookieLink);
			const response = await axios.get(animalsLink, {
				headers: {
					"X-CSRF-TOKEN": csrfResponse.data.token,
					Authorization: `Bearer ${userToken}`,
					"Content-Type": "application/json",
				},
			});
			setAnimals(response.data);
		} catch (error) {
			console.error("Error fetching animals:", error);
		}
	};

	useEffect(() => {
		fetchAnimals();
	}, []);

	const handleDelete = async (id) => {
		try {
			await axios.delete(`${animalsLink}/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log('Animal borrado exitosamente');
			setAnimals(prevAnimals => prevAnimals.filter(animal => animal.id !== id)); // Actualiza el estado directamente
		} catch (error) {
			console.error('Error al borrar el animal:', error);
		}
	};

	const filteredAnimals = animals.filter(animal =>
		animal.nombre.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<div className="flex justify-center mt-2 px-4">
				<div className="collapse bg-[#26dd9a] border border-black">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium text-center">
						Crear Nuevo Animal
					</div>
					<div className="collapse-content bg-[#f4f0f0] border-t-2 border-black p-1">
						<AnimalesAddForm />
					</div>
				</div>
			</div>
			<div>
				<div className="w-[90%] mx-auto p-1 flex flex-row">
					<input
						type="text"
						name="search"
						id="search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="bg-[#f4f0f0] rounded-md p-2 border border-black w-[100%] mt-1"
						placeholder="Buscar animales..."
					/>
					<button className="-ms-7">
						<FaMagnifyingGlass />
					</button>
				</div>
			</div>
			<div className="w-[90%] mx-auto mt-4">
				{filteredAnimals.length > 0 ? (
					filteredAnimals.map((animal, index) => (
						<AnimalDesplegable datos={animal} key={index} onDelete={handleDelete} />
					))
				) : (
					<p>No se encontraron animales.</p>
				)}
			</div>
		</>
	);
}

export default VistaAnimales;
