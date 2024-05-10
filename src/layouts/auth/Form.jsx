import "./Form.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { infor } from "../../database/Informacion";

const Form = () => {
  const formulario = useRef();
  const [getEvento, setEvento] = useState("");
  const [getFecha, setFecha] = useState("");
  const [getUbicacion, setUbicacion] = useState("");
  const [getDescripcion, setDescripcion] = useState("");

  // const [datos, setDatos] = useState([]);

  let redireccion = useNavigate();
  console.log(infor);

  function registrarEvento(e) {
    e.preventDefault();
    const nuevoEvento = {
      evento: getEvento.toUpperCase(),
      fecha: getFecha,
      ubicacion: getUbicacion,
      descripcion: getDescripcion,
      id: infor.length + 1,
    };
    infor.push(nuevoEvento);
    formulario.current.reset();
  }

  function listaEventos() {
    redireccion(`/registro`);
  }

  return (
    <div>
      <header>
        <div className="elementosHeader">
          <div>
            <img src="./public/evento.png" />
          </div>
          <div className="buttonVisu">
            <button onClick={listaEventos} className="buttonVisualizar">
              Visualizar todos los eventos
            </button>
          </div>
        </div>
      </header>
      <div className="containerNameEventos">
        <div className="nameEventos">
          <h1>Registro de Eventos</h1>
        </div>
      </div>
      <form ref={formulario} onSubmit={(e) => e.preventDefault()}>
        <div className="formEventos">
          {/* <div className="labelForm" > */}
          <label>Nombre del Evento</label>
          {/* </div> */}
          <input
            onChange={(e) => {
              setEvento(e.target.value);
            }}
            type="text"
            placeholder="Evento"
          />
          <label>Fecha</label>
          <input
            onChange={(e) => {
              setFecha(e.target.value);
            }}
            type="date"
            placeholder="Fecha"
          />
          <label>Ubicación</label>
          <input
            onChange={(e) => {
              setUbicacion(e.target.value);
            }}
            type="text"
            placeholder="Ubicacion"
          />
          <label>Descripción</label>
          <input
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
            type="text"
            placeholder="Descripcion"
          />
          <button onClick={registrarEvento} className="buttonRegistrar">
            Registrar Evento
          </button>
        </div>
      </form>
      <footer>
        <p>
          &copy; 2024 La mejor plataforma para controlar tus Eventos - Derechos
          reservados
        </p>
      </footer>
      {/* <Registro data={datos} /> */}
    </div>
  );
};

export default Form;
