import Link from 'next/link';
import '../css/Home.css';

export default function Home() {
  return (
    <div className="container">
      <h1>Bienvenido a nuestra página de citas para mascotas</h1>
      <div className="cards">
        <Link href="/quienes-somos">
          <div className="card">
            <h3>Quienes Somos</h3>
            <p>Conoce más sobre nuestro equipo y nuestra misión.</p>
          </div>
        </Link>
        <Link href="/reservas">
          <div className="card">
            <h3>Reservas</h3>
            <p>Agenda una cita para tu mascota fácilmente.</p>
          </div>
        </Link>
        <Link href="/contacto">
          <div className="card">
            <h3>Contacto</h3>
            <p>Ponte en contacto con nosotros para cualquier consulta.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
