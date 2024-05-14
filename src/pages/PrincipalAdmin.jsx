import Navbar from "../components/Navbar";
import { MdTask } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";
import { FaRegUser, FaMoneyBill, FaDatabase } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaShop } from "react-icons/fa6";

function PrincipalAdmin() {
	let sizeValue = "16em";

	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<div className="grid mt-3 grid-cols-2 lg:grid-cols-4">
				<a
					href="/tasks"
					className="group/task overflow-hidden flex justify-center flex-col bg-[#d9d9d9] sm:max-h-96 p-2 border-2 border-black shadow-md mt-8 lg:mt-0 rounded-lg m-1"
				>
					<MdTask
						className="mx-auto mt-10 group-hover/task:scale-105 transition-all"
						size={sizeValue}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/task:scale-105 transition-all">
						Tareas
					</h2>
				</a>
				<a
					href="/animal"
					className="group/animal overflow-hidden flex justify-center flex-col bg-[#d9d9d9] sm:max-h-96 p-2 border-2 border-black shadow-md mt-8 lg:mt-0 rounded-lg m-1"
				>
					<IoMdPaw
						className="mx-auto mt-10 group-hover/animal:scale-105 transition-all"
						size={sizeValue}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/animal:scale-105 transition-all">
						Animales
					</h2>
				</a>
				<a
					href="/volunteers"
					className="group/volunteer overflow-hidden flex justify-center flex-col bg-[#d9d9d9] sm:max-h-96 p-2 border-2 border-black shadow-md  lg:mt-0 rounded-lg m-1"
				>
					<FaRegUser
						className="mx-auto mt-10 group-hover/volunteer:scale-105 transition-all"
						size={sizeValue}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/volunteer:scale-105 transition-all">
						Voluntarios
					</h2>
				</a>
				<a
					href="/donators"
					className="group/money overflow-hidden flex justify-center flex-col bg-[#d9d9d9] sm:max-h-96 p-2 border-2 border-black shadow-md lg:mt-0 rounded-lg m-1"
				>
					<FaMoneyBill
						className="mx-auto mt-10 group-hover/money:scale-105 transition-all"
						size={sizeValue}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/money:scale-105 transition-all">
						Apadrinamiento
					</h2>
				</a>
				<a
					href="/reports"
					className="group/reports overflow-hidden flex justify-center flex-col bg-[#d9d9d9] sm:max-h-96 p-2 border-2 border-black shadow-md lg:mt-0 rounded-lg m-1"
				>
					<FaDatabase
						className="mx-auto mt-10 group-hover/reports:scale-105 transition-all"
						size={sizeValue}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/reports:scale-105 transition-all">
						Informes
					</h2>
				</a>
				<a
					href="/data"
					className="group/data overflow-hidden flex justify-center flex-col bg-[#d9d9d9] sm:max-h-96 p-2 border-2 border-black shadow-md lg:mt-0 rounded-lg m-1"
				>
					<GoGraph
						className="mx-auto mt-10 group-hover/data:scale-105 transition-all"
						size={sizeValue}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/data:scale-105 transition-all">
						Datos
					</h2>
				</a>
				<a
					href="/shop"
					className="group/shop overflow-hidden flex justify-center flex-col bg-[#d9d9d9] sm:max-h-96 p-2 border-2 border-black shadow-md lg:mt-0 rounded-lg m-1"
				>
					<FaShop
						className="mx-auto mt-10 group-hover/shop:scale-105 transition-all"
						size={sizeValue}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/shop:scale-105 transition-all">
						Tienda
					</h2>
				</a>
			</div>
		</div>
	);
}

export default PrincipalAdmin;
