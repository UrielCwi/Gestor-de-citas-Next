import Form from '../components/Form';
import Card from '../components/Card';
import { useState } from 'react';
import '../css/Reservas.css';

export default function Reservas() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <h1>Reservas</h1>
      <Form onSubmit={agregarCita} />
      <div>
        {citas.map((cita, index) => (
          <Card
            key={index}
            {...cita}
            onDelete={() => eliminarCita(index)}
          />
        ))}
      </div>
    </div>
  );
}
