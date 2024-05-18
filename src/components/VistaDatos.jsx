import { useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';

function VistaDatos() {
    const [animalData, setAnimalData] = useState(null);
    const [volunteerData, setVolunteerData] = useState(null);
    const [taskData, setTaskData] = useState(null);
    const [userData, setUserData] = useState([]);

    // Generar datos ficticios para los gráficos
    useEffect(() => {
        // Datos ficticios para el gráfico de animales
        const animalChartData = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
                {
                    label: 'Animales Ingresados',
                    backgroundColor: '#3182CE',
                    borderColor: '#3182CE',
                    borderWidth: 1,
                    hoverBackgroundColor: '#63B3ED',
                    hoverBorderColor: '#63B3ED',
                    data: [15, 10, 8, 5, 12, 14], // Datos ficticios
                },
            ],
        };
        setAnimalData(animalChartData);

        // Datos ficticios para el gráfico de voluntarios
        const volunteerChartData = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
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
                    data: [10, 20, 15, 25, 20, 30],
                },
            ],
        };
        setVolunteerData(volunteerChartData);

        // Datos ficticios para el gráfico de tareas
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
                    data: [20, 8, 5], // Datos ficticios
                },
            ],
        };
        setTaskData(taskChartData);

        // Datos ficticios de usuarios
        const users = [
            { id: 1, name: 'Usuario 1', email: 'usuario1@example.com', created_at: '2024-05-15' },
            { id: 2, name: 'Usuario 2', email: 'usuario2@example.com', created_at: '2024-05-14' },
            { id: 3, name: 'Usuario 3', email: 'usuario3@example.com', created_at: '2024-05-13' },
            { id: 4, name: 'Usuario 4', email: 'usuario4@example.com', created_at: '2024-05-12' },
            { id: 5, name: 'Usuario 5', email: 'usuario5@example.com', created_at: '2024-05-11' },
        ];
        setUserData(users);
    }, []);

    // Opciones comunes para los gráficos
    const commonOptions = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }],
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
                        {userData.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VistaDatos;
