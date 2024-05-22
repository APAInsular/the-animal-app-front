import Navbar from "../components/Navbar";
import { MdTask } from "react-icons/md";
import { IoMdPaw } from "react-icons/io";
import { FaRegUser, FaMoneyBill, FaDatabase } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

function PrincipalAdmin() {
    let sizeValue = "10em";
    let iconColor = "#4A90E2";

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Navbar />
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                <a
                    href="/tasks"
                    className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                >
                    <MdTask className="mb-4 " size={sizeValue} color={iconColor} />
                    <h2 className="text-center text-xl font-bold text-gray-800">Tareas</h2>
                </a>
                <a
                    href="/animal"
                    className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                >
                    <IoMdPaw className="mb-4" size={sizeValue} color={iconColor} />
                    <h2 className="text-center text-xl font-bold text-gray-800">Animales</h2>
                </a>
                <a
                    href="/volunteers"
                    className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                >
                    <FaRegUser className="mb-4" size={sizeValue} color={iconColor} />
                    <h2 className="text-center text-xl font-bold text-gray-800">Voluntarios</h2>
                </a>
                <a
                    href="/donators"
                    className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                >
                    <FaMoneyBill className="mb-4" size={sizeValue} color={iconColor} />
                    <h2 className="text-center text-xl font-bold text-gray-800">Apadrinamiento</h2>
                </a>
                <a
                    href="/general"
                    className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                >
                    <FaDatabase className="mb-4" size={sizeValue} color={iconColor} />
                    <h2 className="text-center text-xl font-bold text-gray-800">General</h2>
                </a>
                <a
                    href="/data"
                    className="group flex flex-col items-center bg-white p-6 border border-gray-200 shadow-lg rounded-lg transition-transform hover:scale-105"
                >
                    <GoGraph className="mb-4" size={sizeValue} color={iconColor} />
                    <h2 className="text-center text-xl font-bold text-gray-800">Datos</h2>
                </a>
            </div>
        </div>
    );
}

export default PrincipalAdmin;
