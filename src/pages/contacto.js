import '../css/Contacto.css';

export default function Contacto() {
  return (
    <div className="container">
      <h1>Contacto</h1>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
