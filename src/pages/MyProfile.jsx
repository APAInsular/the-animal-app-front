import { useState } from "react";
import "../index.css";
import { FaRegEdit } from "react-icons/fa";
import Navbar from "../components/Navbar";

function MyProfile() {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div>
			<Navbar />
			<div className="flex justify-center mt-2 w-screen">
				<div className="bg-[#ffeb35] p-2 flex flex-row border border-black rounded-lg shadow-lg">
					<h2 className="text-4xl font-bold me-4">Mi Perfil</h2>
					<button className="" onClick={() => setIsEditing(!isEditing)}>
						<FaRegEdit size={"2em"} />
					</button>
				</div>
			</div>
			<div className={`${isEditing ? "hidden" : "block"}`}>
				<p className="font-bold text-center mt-3 text-2xl">Juan</p>
				<p className="font-bold text-center mt-3 text-xl">
					juanito123@gmail.com
				</p>
				<p className="font-bold text-center mt-3 text-2xl">+34 666606666</p>
			</div>
			<div className={`${isEditing ? "block" : "hidden"}`}>
				<form action="" className="flex flex-col justify-center">
					<input
						type="text"
						name="name"
						id="name"
						value={"Juan"}
						className="font-bold text-center mt-3 text-2xl bg-[#d9d9d9] border border-black shadow-md rounded-md w-[80%] lg:w-[30%] mx-auto"
					/>
					<input
						type="email"
						name="mail"
						id="mail"
						value={"juanito123@gmail.com"}
						className="font-bold text-center mt-3 text-xl bg-[#d9d9d9] border border-black shadow-md rounded-md w-[80%] lg:w-[30%] mx-auto"
					/>
					<input
						type="text"
						name="tlf"
						id="tlf"
						value={"+34 666606666"}
						className="font-bold text-center mt-3 text-2xl bg-[#d9d9d9] border border-black shadow-md rounded-md w-[80%] lg:w-[30%] mx-auto"
					/>
					<input
						type="submit"
						value="Guardar cambios"
						className="p-2 bg-[#26dd9a] font-bold w-40 border border-black rounded-lg mx-auto mt-4 cursor-pointer hover:scale-105 transition-all"
					/>
				</form>
			</div>
		</div>
	);
}

export default MyProfile;