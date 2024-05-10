import "./Registro.css";
import { useNavigate } from "react-router-dom";
import { infor } from "../../database/Informacion";
// import Form from "./layouts/auth/Form";

const Registro = () => {
  let data = JSON.parse(sessionStorage.getItem("data"));
  console.log(data);
  let redireccion = useNavigate();
  function regisEvento() {
    {
      redireccion("/");
    }
  }

  return (
    <div>
      <header>
        <div className="elementosHeader">
          <div>
            <img src="./public/evento.png" alt="imgCalendario" />
          </div>
          <div>
            <button onClick={regisEvento} className="buttonRegistrar">
              Registrar Evento
            </button>
          </div>
        </div>
      </header>
      <div className="containerEvento">
        <div className="titleEvento">
          <h1>Lista de Eventos</h1>
        </div>
      </div>
      <div className="contenedor">
        {infor.map((nuevoEvento) => (
          <section key={nuevoEvento.id} className="cardEvento">
            <div className="containerItems">
              <div className="tituloEvento">
                <h1>{nuevoEvento.evento}</h1>
              </div>
              <div className="ubicacion">
                <h3>Ubicación: {nuevoEvento.ubicacion}</h3>
              </div>
              <div className="items">
                <p>Descripción: {nuevoEvento.descripcion}</p>
              </div>
            </div>
            <div className="itemsTwo">
              <p>Fecha: {nuevoEvento.fecha}</p>
            </div>
          </section>
        ))}
      </div>
      <footer>
        <p>
          &copy; 2024 La mejor plataforma para controlar tus Eventos - Derechos
          reservados
        </p>
      </footer>
    </div>
  );
};

export default Registro;
