import "../index.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

function VistaAnimales() {
	return (
		<>
			<div className=" flex justify-center mt-2">
				<button className=" w-[90%] bg-[#26dd9a] rounded-lg p-2 border border-black shadow-md hover:scale-105 transition-all font-bold text-lg">
					Añadir Animal
				</button>
			</div>
			<div>
				<div className="w-[90%] mx-auto p-1 flex flex-row">
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
			</div>
			<div>{/* aqui es donde van los animales */}</div>
		</>
	);
}

export default VistaAnimales;
