import "../index.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AnimalesAddForm from "./AnimalesAddForm";

function VistaAnimales() {
	return (
		<>
			<div className=" flex justify-center mt-2 px-4">
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
