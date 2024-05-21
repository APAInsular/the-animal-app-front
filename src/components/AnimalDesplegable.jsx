import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { animalsLink } from '../data/data';

function AnimalCard({ datos, onEdit, onDelete }) {
  const [desplegado, setDesplegado] = useState(false);
  const [animalData, setAnimalData] = useState({
    ...datos,
    historiales_medicos: datos.historiales_medicos || [],
    vacunaciones: datos.vacunaciones || [],
    necesidades_y_cuidados: datos.necesidades_y_cuidados || [],
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log('Vacunaciones:', animalData.vacunaciones);
  }, [animalData.vacunaciones]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setAnimalData({
      ...animalData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleHistorialChange = (index, event) => {
    const { name, value } = event.target;
    const historiales_medicos = [...animalData.historiales_medicos];
    historiales_medicos[index] = {
      ...historiales_medicos[index],
      [name]: value,
    };
    setAnimalData({
      ...animalData,
      historiales_medicos,
    });
  };

  const handleVacunacionChange = (index, event) => {
    const { name, value } = event.target;
    const vacunaciones = [...animalData.vacunaciones];
    vacunaciones[index] = {
      ...vacunaciones[index],
      [name]: value,
    };
    setAnimalData({
      ...animalData,
      vacunaciones,
    });
  };

  const handleNecesidadesChange = (index, event) => {
    const { name, value } = event.target;
    const necesidades_y_cuidados = [...animalData.necesidades_y_cuidados];
    necesidades_y_cuidados[index] = {
      ...necesidades_y_cuidados[index],
      [name]: value,
    };
    setAnimalData({
      ...animalData,
      necesidades_y_cuidados,
    });
  };

  const handleAddHistorial = () => {
    setAnimalData({
      ...animalData,
      historiales_medicos: [
        ...animalData.historiales_medicos,
        { fecha: '', descripcion: '' },
      ],
    });
  };

  const handleAddVacunacion = () => {
    setAnimalData({
      ...animalData,
      vacunaciones: [
        ...animalData.vacunaciones,
        { nombre: '', fecha: '' },
      ],
    });
  };

  const handleAddNecesidades = () => {
    setAnimalData({
      ...animalData,
      necesidades_y_cuidados: [
        ...animalData.necesidades_y_cuidados,
        { descripcion: '' },
      ],
    });
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(`${animalsLink}/${animalData.id}`, animalData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsEditing(false);
      onEdit(response.data);
    } catch (error) {
      console.error('Error al editar el animal:', error);
    }
  };

  const handleDelete = () => {
    onDelete(animalData.id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 ">
      <div className="flex justify-between items-center cursor-pointer " onClick={() => setDesplegado(!desplegado)}>
        <h2 className="text-xl font-bold">{animalData.nombre}</h2>
        <button  className="text-lg">
          {desplegado ? '▲' : '▼'}
        </button>
      </div>
      <div className={`${desplegado ? 'block' : 'hidden'} mt-4`}>
        <div className="flex justify-center mb-4">
          <img src={animalData.foto} alt={animalData.nombre} className="w-32 h-32 object-cover rounded-lg shadow-md" />
        </div>
        {isEditing ? (
          <form className="grid grid-cols-1 gap-4">
            <p><strong>NOMBRE:</strong></p>
            <input type="text" name="nombre" value={animalData.nombre} onChange={handleChange} placeholder="Nombre" className="input input-bordered w-full" />
            <p><strong>FECHA DE ESTERILIZACIÓN:</strong></p>
            <input type="date" name="fecha_esterilizacion" value={animalData.fecha_esterilizacion} onChange={handleChange} className="input input-bordered w-full" />
            <p><strong>FECHA DE NACIMIENTO:</strong></p>
            <input type="date" name="fecha_nacimiento" value={animalData.fecha_nacimiento} onChange={handleChange} className="input input-bordered w-full" />
            <p><strong>RAZA:</strong></p>
            <input type="text" name="raza" value={animalData.raza} onChange={handleChange} placeholder="Raza" className="input input-bordered w-full" />
            <p><strong>ESPECIE:</strong></p>
            <input type="text" name="especie" value={animalData.especie} onChange={handleChange} placeholder="Especie" className="input input-bordered w-full" />
            <p><strong>TIPO:</strong></p>
            <input type="text" name="tipo" value={animalData.tipo} onChange={handleChange} placeholder="Tipo" className="input input-bordered w-full" />
            <p><strong>Nº MICROCHIP:</strong></p>
            <input type="text" name="microchip" value={animalData.microchip} onChange={handleChange} placeholder="Nº Microchip" className="input input-bordered w-full" />
            <div className="flex items-center gap-2">
              <input type="checkbox" name="esterilizado" checked={animalData.esterilizado} onChange={handleChange} className="checkbox checkbox-primary" />
              <label htmlFor="esterilizado">Esterilizado</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="zoocan" checked={animalData.zoocan} onChange={handleChange} className="checkbox checkbox-primary" />
              <label htmlFor="zoocan">Alta Zoocan</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="cartilla" checked={animalData.cartilla} onChange={handleChange} className="checkbox checkbox-primary" />
              <label htmlFor="cartilla">Tiene Cartilla</label>
            </div>

            <p><strong>FECHA DESPARASITACIÓN:</strong></p>
            <input type="date" name="desparasitacion" value={animalData.desparasitacion} onChange={handleChange} className="input input-bordered w-full" />
            <p><strong>FECHA LLEGADA:</strong></p>
            <input type="date" name="fecha_llegada" value={animalData.fecha_llegada} onChange={handleChange} className="input input-bordered w-full" />
            <p><strong>FECHA FALLECIMIENTO:</strong></p>
            <input type="date" name="fecha_fallecimiento" value={animalData.fecha_fallecimiento} onChange={handleChange} className="input input-bordered w-full" />
            <p><strong>HISTORIAL CLINICO:</strong></p>
            <textarea name="historial_clinico" value={animalData.historial_clinico} onChange={handleChange} placeholder="Historial Clínico" className="textarea textarea-bordered w-full" />
            <p><strong>SUPERPODER:</strong></p>
            <textarea name="superpoder" value={animalData.superpoder} onChange={handleChange} placeholder="Superpoder" className="textarea textarea-bordered w-full" />
            {animalData.historiales_medicos.map((historial, index) => (
              <div key={index} className="border rounded-lg p-2 mb-2">
                <h4 className="font-bold">Historial Médico {index + 1}</h4>
                <input type="date" name="fecha" value={historial.fecha} onChange={(event) => handleHistorialChange(index, event)} className="input input-bordered w-full mb-2" />
                <textarea name="descripcion" value={historial.descripcion} onChange={(event) => handleHistorialChange(index, event)} placeholder="Descripción" className="textarea textarea-bordered w-full" />
              </div>
            ))}
            <button type="button" onClick={handleAddHistorial} className="btn btn-primary mb-4">Añadir Historial Médico</button>
            {animalData.vacunaciones.map((vacunacion, index) => (
              <div key={index} className="border rounded-lg p-2 mb-2">
                <h4 className="font-bold">Vacunación {index + 1}</h4>
                <input type="text" name="nombre" value={vacunacion.nombre} onChange={(event) => handleVacunacionChange(index, event)} placeholder="Nombre de la vacuna" className="input input-bordered w-full mb-2" />
                <input type="date" name="fecha" value={vacunacion.fecha} onChange={(event) => handleVacunacionChange(index, event)} className="input input-bordered w-full mb-2" />
              </div>
            ))}
            <button type="button" onClick={handleAddVacunacion} className="btn btn-primary mb-4">Añadir Vacunación</button>
            {animalData.necesidades_y_cuidados.map((necesidad, index) => (
              <div key={index} className="border rounded-lg p-2 mb-2">
                <h4 className="font-bold">Necesidad {index + 1}</h4>
                <textarea name="descripcion" value={necesidad.descripcion} onChange={(event) => handleNecesidadesChange(index, event)} placeholder="Descripción" className="textarea textarea-bordered w-full mb-2" />
              </div>
            ))}
            <button type="button" onClick={handleAddNecesidades} className="btn btn-primary mb-4">Añadir Necesidad</button>
            {animalData.necesidades_y_cuidados.map((necesidad, index) => (
              <div key={index} className="border rounded-lg p-2 mb-2">
                <h4 className="font-bold">Necesidad {index + 1}</h4>
                <textarea name="descripcion" value={necesidad.descripcion} onChange={(event) => handleNecesidadesChange(index, event)} placeholder="Descripción" className="textarea textarea-bordered w-full mb-2" />
              </div>
            ))}
            <button type="button" onClick={handleAddNecesidades} className="btn btn-primary mb-4">Añadir Cuidado</button>
            <div className="flex justify-between">
              <button type="button" onClick={handleEdit} className="btn btn-success">Guardar</button>
              <button type="button" onClick={() => setIsEditing(false)} className="btn btn-error">Cancelar</button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Fecha de esterilización:</strong> {animalData.fecha_esterilizacion}</p>
            <p><strong>Esterilizado:</strong> {animalData.esterilizado ? 'Sí' : 'No'}</p>
            <p><strong>Fecha de llegada:</strong> {animalData.fecha_llegada}</p>
            <p><strong>Alta Zoocan:</strong> {animalData.zoocan ? 'Sí' : 'No'}</p>
            <p><strong>Fecha de nacimiento:</strong> {animalData.fecha_nacimiento}</p>
            <p><strong>Tiene cartilla:</strong> {animalData.cartilla ? 'Sí' : 'No'}</p>
            <p><strong>Raza:</strong> {animalData.raza}</p>
            <p><strong>Tipo:</strong> {animalData.tipo}</p>
            <p><strong>Especie:</strong> {animalData.especie}</p>
            <p><strong>Nº Microchip:</strong> {animalData.microchip}</p>
            <p><strong>Desparasitación:</strong> {animalData.desparasitacion}</p>
            <p><strong>Fecha de fallecimiento:</strong> {animalData.fecha_fallecimiento}</p>
            <div className="col-span-2">
              <h4 className="font-bold">Historial Médico</h4>
              {animalData.historiales_medicos.map((historial, index) => (
                <div key={index} className="border rounded-lg p-2 mb-2">
                  <p><strong>Fecha:</strong> {historial.fecha}</p>
                  <p><strong>Descripción:</strong> {historial.descripcion}</p>
                </div>
              ))}
            </div>
            <div className="col-span-2">
              <h4 className="font-bold">Vacunaciones</h4>
              {animalData.vacunaciones.length > 0 ? (
                animalData.vacunaciones.map((vacunacion, index) => (
                  <div key={index} className="border rounded-lg p-2 mb-2">
                    <p><strong>Nombre de la vacuna:</strong> {vacunacion.nombre}</p>
                    <p><strong>Fecha:</strong> {vacunacion.fecha}</p>
                  </div>
                ))
              ) : (
                <p>No hay vacunaciones registradas.</p>
              )}
            </div>
            <div className="col-span-2">
              <h4 className="font-bold">Historial Clínico</h4>
              <p>{animalData.historial_clinico}</p>
            </div>
            <div className="col-span-2">
              <h4 className="font-bold">Superpoder</h4>
              <p>{animalData.superpoder}</p>
            </div>
            <div className="col-span-2">
              <h4 className="font-bold">Alimentación</h4>
              {animalData.necesidades_y_cuidados.length > 0 ? (
                animalData.necesidades_y_cuidados.map((necesidad, index) => (
                  <div key={index} className="border rounded-lg p-2 mb-2">
                    <p><strong>Descripción:</strong> {necesidad.descripcion}</p>
                  </div>
                ))
              ) : (
                <p>No hay Alimentación registrada.</p>
              )}
            </div>
            <div className="col-span-2">
              <h4 className="font-bold">Necesidades</h4>
              {animalData.necesidades_y_cuidados.length > 0 ? (
                animalData.necesidades_y_cuidados.map((necesidad, index) => (
                  <div key={index} className="border rounded-lg p-2 mb-2">
                    <p><strong>Descripción:</strong> {necesidad.descripcion}</p>
                  </div>
                ))
              ) : (
                <p>No hay cuidados registrados.</p>
              )}
            </div>
            <div className="col-span-2">
              <h4 className="font-bold">Cuidados</h4>
              {animalData.necesidades_y_cuidados.length > 0 ? (
                animalData.necesidades_y_cuidados.map((necesidad, index) => (
                  <div key={index} className="border rounded-lg p-2 mb-2">
                    <p><strong>Descripción:</strong> {necesidad.descripcion}</p>
                  </div>
                ))
              ) : (
                <p>No hay necesidades  registrados.</p>
              )}
            </div>
            <div className="col-span-2 flex justify-between mt-4">
              <button onClick={() => setIsEditing(true)} className="btn btn-warning"><FaEdit /> Editar</button>
              <button onClick={handleDelete} className="btn btn-error"><FaTrash /> Eliminar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimalCard;
