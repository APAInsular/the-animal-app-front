import Navbar from "../components/Navbar";
import { MdTask } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";

function Principal() {
    let sizeValue = "10em";
    let iconColor = "#4A90E2"; // Color azul claro

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    <a
                        href="/tareasvoluntario"
                        className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                    >
                        <MdTask className="mb-4" size={sizeValue} color={iconColor} />
                        <h2 className="text-center text-xl font-bold text-gray-800">Tareas</h2>
                    </a>
                    <a
                        href="/animal"
                        className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                    >
                        <IoMdPaw className="mb-4" size={sizeValue} color={iconColor} />
                        <h2 className="text-center text-xl font-bold text-gray-800">Animales</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Principal;
