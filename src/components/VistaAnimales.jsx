import { useEffect, useState } from "react";
import "../index.css";
import AnimalesAddForm from "./AnimalesAddForm";
import AnimalDesplegable from "./AnimalDesplegable";
import { cookieLink, animalsLink } from "../data/data";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

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
			<div className="flex justify-center mt-4 px-4">
				<div className="collapse collapse-arrow border border-black bg-lime-400">
					<input type="checkbox" className="peer" />
					<div className="collapse-title text-2xl font-medium text-black flex items-center justify-center cursor-pointer">
						<span>Añadir nuevo animal</span>
					</div>
					<div className="collapse-content bg-base-200 border-t-2 border-black p-4">
						<AnimalesAddForm />
					</div>
				</div>
			</div>

			<div className="mt-6">
				<div className="w-[90%] mx-auto p-1 flex items-center">
					<input
						type="text"
						name="search"
						id="search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="input input-bordered w-full"
						placeholder="Buscar animales..."
					/>
					<button className="btn btn-primary ml-2">
						<FaSearch />
					</button>
				</div>
			</div>

			<div className="w-[90%] mx-auto mt-4">
				{filteredAnimals.length > 0 ? (
					filteredAnimals.map((animal, index) => (
						<AnimalDesplegable datos={animal} key={index} onDelete={handleDelete} />
					))
				) : (
					<div className="alert alert-warning shadow-lg">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01M20 20h-8M4 20h2m12 0H8M6 16h12M6 12h12M6 8h8"></path>
							</svg>
							<span>No se encontraron animales.</span>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default VistaAnimales;
