import "../index.css";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import axios from "axios";
import { animalsLink } from '../data/data.js';

function AnimalesAddForm() {
	const [nombre, setNombre] = useState('');
	const [estFecha, setEstFecha] = useState('');
	const [nacFecha, setNacFecha] = useState('');
	const [foto, setFoto] = useState(null);
	const [llegadaFecha, setLlegadaFecha] = useState('');
	const [raza, setRaza] = useState('');
	const [tipo, setTipo] = useState('');
	const [microchip, setMicrochip] = useState('');
	const [esterilizado, setEsterilizado] = useState(0);
	const [zoocan, setZoocan] = useState(0);
	const [cartilla, setCartilla] = useState(0);
	const [desparasitacion, setDesparasitacion] = useState('');
	const [vacunas, setVacunas] = useState([]);
	const [historial, setHistorial] = useState('');
	const [superpoder, setSuperpoder] = useState('');
	const [descripcion, setDescripcion] = useState('');

	const handleNewVacuna = (e) => {
		e.preventDefault();
		setVacunas((prevVacunas) => [
			...prevVacunas,
			{ name: "", uuid: crypto.randomUUID(), fecha: new Date().toISOString().split('T')[0] },
		]);
	};

	const handleDeleteOldVacuna = (uuid) => {
		setVacunas((prevVacunas) => prevVacunas.filter(vacuna => vacuna.uuid !== uuid));
	};

	const handleVacunaChange = (uuid, field, value) => {
		setVacunas((prevVacunas) =>
			prevVacunas.map((vacuna) =>
				vacuna.uuid === uuid ? { ...vacuna, [field]: value } : vacuna
			)
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('nombre', nombre);
		formData.append('fecha_esterilizacion', estFecha);
		formData.append('fecha_nacimiento', nacFecha);
		formData.append('foto', foto);
		formData.append('fecha_llegada', llegadaFecha);
		formData.append('raza', raza);
		formData.append('tipo', tipo);
		formData.append('microchip', microchip);
		formData.append('esterilizado', esterilizado ? 1 : 0);
		formData.append('zoocan', zoocan ? 1 : 0);
		formData.append('cartilla', cartilla ? 1 : 0);
		formData.append('desparasitacion', desparasitacion);
		formData.append('historia', historial);
		formData.append('superpoder', superpoder);
		formData.append('descripcion', descripcion);
		vacunas.forEach((vacuna, index) => {
			formData.append(`vacunas[${index}][name]`, vacuna.name);
			formData.append(`vacunas[${index}][uuid]`, vacuna.uuid);
			formData.append(`vacunas[${index}][fecha]`, vacuna.fecha);
		});

		try {
			const response = await axios.post(animalsLink, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('Animal creado exitosamente:', response.data);
		} catch (error) {
			if (error.response) {
				console.error('Error al crear el animal:', error.response.data);
				console.error('Estado:', error.response.status);
				console.error('Headers:', error.response.headers);
			} else if (error.request) {
				console.error('Error en la solicitud:', error.request);
			} else {
				console.error('Error desconocido:', error.message);
			}
			console.error('Configuración de la solicitud:', error.config);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="name" className="font-bold">
						Nombre
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="p-1 rounded-lg shadow-md border border-black"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						required
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="est-fecha" className="font-bold">
						Fecha Esterilizacion
					</label>
					<input
						type="date"
						name="est-fecha"
						id="est-fecha"
						className="p-1 rounded-lg shadow-md border border-black"
						value={estFecha}
						onChange={(e) => setEstFecha(e.target.value)}
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="nac-fecha" className="font-bold">
						Fecha Nacimiento
					</label>
					<input
						type="date"
						name="nac-fecha"
						id="nac-fecha"
						className="p-1 rounded-lg shadow-md border border-black"
						value={nacFecha}
						onChange={(e) => setNacFecha(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="foto" className="font-bold">
						Foto del Animal
					</label>
					<input
						type="file"
						name="foto"
						id="foto"
						className="p-1 rounded-lg shadow-md border border-black"
						onChange={(e) => setFoto(e.target.files[0])}
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="llegada-fecha" className="font-bold">
						Fecha llegada
					</label>
					<input
						type="date"
						name="llegada-fecha"
						id="llegada-fecha"
						className="p-1 rounded-lg shadow-md border border-black"
						value={llegadaFecha}
						onChange={(e) => setLlegadaFecha(e.target.value)}
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="raza" className="font-bold">
						Raza
					</label>
					<input
						type="text"
						name="raza"
						id="raza"
						className="p-1 rounded-lg shadow-md border border-black"
						value={raza}
						onChange={(e) => setRaza(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="tipo" className="font-bold">
						Tipo
					</label>
					<input
						type="text"
						name="tipo"
						id="tipo"
						className="p-1 rounded-lg shadow-md border border-black"
						value={tipo}
						onChange={(e) => setTipo(e.target.value)}
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="microchip" className="font-bold">
						Nº Microchip
					</label>
					<input
						type="text"
						name="microchip"
						id="microchip"
						className="p-1 rounded-lg shadow-md border border-black"
						value={microchip}
						onChange={(e) => setMicrochip(e.target.value)}
					/>
				</div>
				<div className="flex flex-col mx-1 justify-center">
					<label htmlFor="esterilizado" className="font-bold">
						Esterilizado
					</label>
					<input
						type="checkbox"
						name="esterilizado"
						id="esterilizado"
						className="p-1 mt-4 mb-3 border border-black"
						checked={esterilizado}
						onChange={(e) => setEsterilizado(e.target.checked)}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<div className="flex flex-col mx-1">
					<label htmlFor="zoocan" className="font-bold">
						Alta Zoocan
					</label>
					<input
						type="checkbox"
						name="zoocan"
						id="zoocan"
						className="p-1 mt-4 mb-3 border border-black"
						checked={zoocan}
						onChange={(e) => setZoocan(e.target.checked)}
					/>
				</div>
				<div className="flex flex-col mx-1">
					<label htmlFor="cartilla" className="font-bold">
						Tiene Cartilla
					</label>
					<input
						type="checkbox"
						name="cartilla"
						id="cartilla"
						className="p-1 mt-4 mb-3 border border-black"
						checked={cartilla}
						onChange={(e) => setCartilla(e.target.checked)}
					/>
				</div>
				<div className="flex flex-col mx-1 justify-center">
					<label htmlFor="desparasitacion" className="font-bold">
						Desparasitacion
					</label>
					<input
						type="date"
						name="desparasitacion"
						id="desparasitacion"
						className="p-1 rounded-lg shadow-md border border-black"
						value={desparasitacion}
						onChange={(e) => setDesparasitacion(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<div className="flex flex-row justify-center">
					<h2 className="font-bold text-lg">Fecha de Vacunacion</h2>
					<button
						className="p-2 border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
						onClick={handleNewVacuna}
					>
						<BiPlus />
					</button>
				</div>
				<div className="flex justify-center">
					{vacunas.map((vacuna) => (
						<div key={vacuna.uuid} className="flex flex-col mx-1">
							<div className="flex flex-row">
								<input
									type="text"
									name={`vacuna-name-${vacuna.uuid}`}
									id={`vacuna-name-${vacuna.uuid}`}
									value={vacuna.name}
									onChange={(e) => handleVacunaChange(vacuna.uuid, 'name', e.target.value)}
									className="p-1 rounded-lg shadow-md border border-black"
								/>
								<button
									type="button"
									className="border border-black ms-2 hover:scale-105 transition-all rounded-xl bg-white"
									onClick={() => handleDeleteOldVacuna(vacuna.uuid)}
								>
									<TbTrash />
								</button>
							</div>
							<input
								type="date"
								name={`vacuna-fecha-${vacuna.uuid}`}
								id={`vacuna-fecha-${vacuna.uuid}`}
								value={vacuna.fecha}
								onChange={(e) => handleVacunaChange(vacuna.uuid, 'fecha', e.target.value)}
								className="p-1 rounded-lg shadow-md border border-black mt-1"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col mt-2">
				<h2 className="mx-auto text-lg font-bold">Historia</h2>
				<textarea
					name="historial"
					id="historial"
					cols="20"
					rows="10"
					className="border border-black rounded-md shadow-md mx-auto w-4/12 p-1 bg-white h-24 mt-1 resize-none"
					value={historial}
					onChange={(e) => setHistorial(e.target.value)}
				></textarea>
			</div>
			<div className="flex flex-col mt-2">
				<h2 className="mx-auto text-lg font-bold">SuperPoder</h2>
				<textarea
					name="superpoder"
					id="superpoder"
					cols="20"
					rows="10"
					className="border border-black rounded-md shadow-md mx-auto w-4/12 p-1 bg-white h-24 mt-1 resize-none"
					value={superpoder}
					onChange={(e) => setSuperpoder(e.target.value)}
				></textarea>
			</div>
			<div className="flex flex-col mt-2">
				<h2 className="mx-auto text-lg font-bold">Descripcion</h2>
				<textarea
					name="descripcion"
					id="descripcion"
					cols="20"
					rows="10"
					className="border border-black rounded-md shadow-md mx-auto w-4/12 p-1 bg-white h-24 mt-1 resize-none"
					value={descripcion}
					onChange={(e) => setDescripcion(e.target.value)}
				></textarea>
			</div>
			<button
				type="submit"
				className="p-2 border border-black rounded-lg shadow-md bg-blue-500 text-white mt-4 mx-auto hover:bg-blue-600"
			>
				Crear Animal
			</button>
		</form>
	);
}

export default AnimalesAddForm;
