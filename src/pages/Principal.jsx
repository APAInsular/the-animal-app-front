import Navbar from "../components/Navbar";

import { MdTask } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";

function Principal() {
	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<div className="grid mt-3 grid-cols-1 grid-rows-1 lg:grid-cols-2 p-2 h-full">
				<a
					href="/tasks"
					className="group/task overflow-hidden flex justify-center flex-col bg-[#d9d9d9] p-2 border-2 border-black shadow-md lg:mt-0 rounded-lg m-1"
				>
					<MdTask
						className="mx-auto mt-10 group-hover/task:scale-105 transition-all"
						size={"32em"}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/task:scale-105 transition-all">
						Tareas
					</h2>
				</a>
				<a
					href="/animals"
					className="group/animal overflow-hidden flex justify-center flex-col bg-[#d9d9d9] p-2 border-2 border-black shadow-md mt-8 lg:mt-0 rounded-lg m-1"
				>
					<IoMdPaw
						className="mx-auto mt-10 group-hover/animal:scale-105 transition-all"
						size={"32em"}
					/>
					<h2 className="text-center mt-10 text-4xl font-bold group-hover/animal:scale-105 transition-all">
						Animales
					</h2>
				</a>
			</div>
		</div>
	);
}

export default Principal;