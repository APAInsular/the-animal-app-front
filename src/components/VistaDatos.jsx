// Hecho por lucas y yeray.
// Diseño hecho por Yeray 
// Logica, conexion con el back hecho por lucas


import { useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import { getAllUsers, getAnimales, getTareas, getVolunteers } from '../data/data';

function VistaDatos() {
    const [animalData, setAnimalData] = useState(null);
    const [volunteerData, setVolunteerData] = useState(null);
    const [taskData, setTaskData] = useState(null);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Obtener datos de animales
        axios.get(getAnimales)
            .then(response => {
                console.log('Datos de animales:', response.data);
                const data = response.data;

                // Transformar los datos para contar animales por mes
                const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                const animalCounts = new Array(12).fill(0); // Inicializar array con 12 ceros
                data.forEach(animal => {
                    const month = new Date(animal.fecha_llegada).getMonth();
                    animalCounts[month]++;
                });

                const animalChartData = {
                    labels: months,
                    datasets: [
                        {
                            label: 'Animales Ingresados',
                            backgroundColor: '#3182CE',
                            borderColor: '#3182CE',
                            borderWidth: 1,
                            hoverBackgroundColor: '#63B3ED',
                            hoverBorderColor: '#63B3ED',
                            data: animalCounts,
                        },
                    ],
                };
                setAnimalData(animalChartData);
            })
            .catch(error => console.error('Error al obtener datos de animales:', error));

        // Obtener datos de voluntarios
        axios.get(getVolunteers)
            .then(response => {
                console.log('Datos de voluntarios:', response.data);
                const data = response.data;

                // Transformar los datos para contar voluntarios por mes
                const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                const volunteerCounts = new Array(12).fill(0); // Inicializar array con 12 ceros
                data.forEach(volunteer => {
                    const month = new Date(volunteer.disponibilidad).getMonth();
                    volunteerCounts[month]++;
                });

                const volunteerChartData = {
                    labels: months,
                    datasets: [
                        {
                            label: 'Voluntarios Registrados',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: '#4CAF50',
                            borderColor: '#4CAF50',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#4CAF50',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: '#4CAF50',
                            pointHoverBorderColor: '#4CAF50',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: volunteerCounts,
                        },
                    ],
                };
                setVolunteerData(volunteerChartData);
            })
            .catch(error => console.error('Error al obtener datos de voluntarios:', error));

        // Obtener datos de tareas
        axios.get(getTareas)
            .then(response => {
                console.log('Datos de tareas:', response.data);
                const data = response.data;
                const now = new Date();

                // Contar las tareas por estado
                let completed = 0, pending = 0, overdue = 0;
                data.forEach(task => {
                    const taskDate = new Date(task.fecha);
                    if (task.finalizada === 1) {
                        completed++;
                    } else if (task.finalizada === 0 && taskDate >= now) {
                        pending++;
                    } else if (task.finalizada === 0 && taskDate < now) {
                        overdue++;
                    }
                });

                const taskChartData = {
                    labels: ['Completadas', 'Pendientes', 'Atrasadas'],
                    datasets: [
                        {
                            label: 'Estado de Tareas',
                            backgroundColor: ['#4CAF50', '#FFC107', '#FF6384'],
                            borderColor: '#fff',
                            borderWidth: 1,
                            hoverBackgroundColor: ['#4CAF50', '#FFC107', '#FF6384'],
                            hoverBorderColor: '#fff',
                            data: [completed, pending, overdue],
                        },
                    ],
                };
                setTaskData(taskChartData);
            })
            .catch(error => console.error('Error al obtener datos de tareas:', error));

        // Obtener datos de usuarios
        axios.get(getAllUsers)
            .then(response => {
                console.log('Datos de usuarios:', response.data.users);
                // Asegurarse de que la respuesta sea un array
                const user = Array.isArray(response.data.users) ? response.data.users : [];
                setUserData(user);
            })
            .catch(error => console.error('Error al obtener datos de usuarios:', error));
    }, []);

    // Ordenar los usuarios por fecha de creación más reciente y obtener los últimos 5
    const latestUsers = userData
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 5);

    // Opciones comunes para los gráficos
    const commonOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Reporte de Datos</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Animales Ingresados por Mes</h2>
                    <div className="mt-4">
                        {animalData && <Bar data={animalData} options={commonOptions} />}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Voluntarios</h2>
                    <div className="mt-4">
                        {volunteerData && <Line data={volunteerData} options={commonOptions} />}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Tareas Completadas</h2>
                    <div className="mt-4">
                        {taskData && <Doughnut data={taskData} options={commonOptions} />}
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Últimos Usuarios Creados</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Creación</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {latestUsers.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{new Date(user.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VistaDatos;
