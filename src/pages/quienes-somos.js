import '../css/QuienesSomos.css';

export default function QuienesSomos() {
  return (
    <div className="container">
      <h1>Quienes Somos</h1>
      <p>Somos una clínica veterinaria dedicada al cuidado de tus mascotas. Nuestro equipo está compuesto por profesionales apasionados por la salud y el bienestar de los animales.</p>
      <div className="team">
        <div className="member">
          <h3>Dr. Juan Pérez</h3>
          <p>Veterinario especializado en animales pequeños. Más de 10 años de experiencia.</p>
        </div>
        <div className="member">
          <h3>Dra. María López</h3>
          <p>Experta en comportamiento animal. Amante de los gatos y perros.</p>
        </div>
        <div className="member">
          <h3>Dr. Carlos García</h3>
          <p>Especialista en cirugía veterinaria. Apasionado por salvar vidas.</p>
        </div>
      </div>
    </div>
  );
}
