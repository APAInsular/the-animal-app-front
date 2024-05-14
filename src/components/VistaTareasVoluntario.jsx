import "../index.css";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleDown } from 'react-icons/fa';

function VistaTareasVoluntario() {
    const [secciones, setSecciones] = useState({
        pendientes: false,
        atrasadas: false,
        completadas: false
    });

    const toggleSeccion = (seccion) => {
        setSecciones({ ...secciones, [seccion]: !secciones[seccion] });
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenido a la gestión de tareas</h1>
                <p className="text-lg">Aquí puedes ver y gestionar tus tareas pendientes, atrasadas y completadas.</p>
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Tareas Pendientes</h2>
                <div className="task border border-gray-200 rounded-lg p-4 mb-4 hover:bg-gray-100 transition-colors" onClick={() => toggleSeccion('pendientes')}>
                    <div className="flex items-center justify-between cursor-pointer " >
                        <div className="flex items-center">
                            <div className="task-icon bg-gray-300 w-8 h-8 mr-2 rounded-full"></div>
                            <div className="task-title">Tirar la basura</div>
                        </div>
                        <FaAngleDown className="text-gray-500 ml-auto" />
                        <div className="task-toggle"></div>
                    </div>
                    <div className={`task-details transition-all duration-300 ease-in-out ${secciones.pendientes ? '' : 'h-0 opacity-0'} overflow-hidden mt-4`}>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid-item">VIDEO DE YOUTUBE:</div>
                            <iframe
                                src="https://www.youtube.com/embed/msizPweg3kE"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                allowfullscreen>
                            </iframe>
                            <div className="grid-item">TAREA:</div>
                            <div className="grid-item text-gray-600">Tirar la basura</div>
                            <div className="grid-item">DESCRIPCIÓN:</div>
                            <div className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem iusto, quo, quos nostrum id omnis laborum, repellendus officiis natus iure expedita illo nesciunt quod aliquam sit eaque optio dignissimos.</div>
                            <div className="grid-item">FECHA DE LA TAREA:</div>
                            <div className="grid-item section-date text-sm text-gray-500">XX/XX/XXXX</div>
                            <div className="grid-item">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Completar Tarea
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-date text-sm text-gray-500">Fecha: XX/XX/XXXX</div>
            </div>

            {/* Tareas Atrasadas */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Tareas Atrasadas</h2>
                <div className="task border border-red-400 rounded-lg p-4 mb-4 hover:bg-red-100 transition-colors" onClick={() => toggleSeccion('atrasadas')}>
                    <div className="flex items-center justify-between cursor-pointer" >
                        <div className="flex items-center">
                            <div className="task-icon bg-red-300 w-8 h-8 mr-2 rounded-full"></div>
                            <div className="task-title">Dar de comer a las gallinas</div>
                        </div>
                        <FaAngleDown className="text-gray-500 ml-auto" />
                        <div className="task-toggle"></div>
                    </div>
                    <div className={`task-details transition-all duration-300 ease-in-out ${secciones.atrasadas ? '' : 'h-0 opacity-0'} overflow-hidden mt-4`}>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid-item">VIDEO DE YOUTUBE:</div>
                            <iframe
                                src="https://www.youtube.com/embed/msizPweg3kE"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                allowfullscreen>
                            </iframe>
                            <div className="grid-item">TAREA:</div>
                            <div className="grid-item text-gray-600">Dar de comer a las gallinas</div>
                            <div className="grid-item">DESCRIPCIÓN:</div>
                            <div className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem iusto, quo, quos nostrum id omnis laborum, repellendus officiis natus iure expedita illo nesciunt quod aliquam sit eaque optio dignissimos.</div>
                            <div className="grid-item">FECHA DE LA TAREA:</div>
                            <div className="grid-item section-date text-sm text-gray-500">XX/XX/XXXX</div>
                            <div className="grid-item">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Completar Tarea Atrasada
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-date text-sm text-gray-500">Fecha: XX/XX/XXXX</div>
            </div>

            {/* Tareas Completadas */}
            <div>

                <h2 className="text-xl font-semibold mb-4">Tareas Completadas</h2>
                <div className="task border border-green-400 rounded-lg p-4 mb-4 hover:bg-green-100 transition-colors" onClick={() => toggleSeccion('completadas')}>
                    <div className="flex items-center justify-between cursor-pointer" >
                        <div className="flex items-center">
                            <div className="task-icon bg-green-300 w-8 h-8 mr-2 rounded-full"></div>
                            <div className="task-title">Pasear a los perros</div>
                        </div>
                        <FaAngleDown className="text-gray-500 ml-auto" />
                        <div className="task-toggle cursor-pointer" onClick={() => toggleSection('completadas')}></div>
                    </div>
                    <div className={`task-details transition-all duration-300 ease-in-out ${secciones.completadas ? '' : 'h-0 opacity-0'} overflow-hidden mt-4`}>
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div className="grid-item">VIDEO DE YOUTUBE:</div>
                            <iframe
                                src="https://www.youtube.com/embed/msizPweg3kE"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                allowfullscreen>
                            </iframe>
                            <div className="grid-item">TAREA:</div>
                            <div className="grid-item text-gray-600">Pasear a los perros</div>
                            <div className="grid-item">DESCRIPCIÓN:</div>
                            <div className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem iusto, quo, quos nostrum id omnis laborum, repellendus officiis natus iure expedita illo nesciunt quod aliquam sit eaque optio dignissimos.</div>
                            <div className="grid-item">FECHA DE LA TAREA:</div>
                            <div className="grid-item section-date text-sm text-gray-500">XX/XX/XXXX</div>
                        </div>
                        <div className="alert bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">¡Enhorabuena!</strong>
                            <span className="block sm:inline"> Has completado esta tarea.</span>
                        </div>
                    </div>
                </div>
                <div className="section-date text-sm text-gray-500">Fecha: XX/XX/XXXX</div>
            </div>
        </div>
    );
}

export default VistaTareasVoluntario;