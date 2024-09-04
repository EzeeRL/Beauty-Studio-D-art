import "./servicios.css";

// eslint-disable-next-line react/prop-types
function Opciones({ setOpciones }) {
  return (
    <>
      <h1 id="servicios" className="title-servicios">
        Servicios
      </h1>
      <div className="container-options-servicios">
        <h3 className="txt-info">Seleccione algún servicio para ver su lista de precios</h3>
        <div className="container-buttons">
          {/* <button
            className="button-option"
            onClick={() => setOpciones("Cursos")}
          >
            <span>Cursos de Manicura (NO VA)</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button> */}
          <button
            className="button-option"
            onClick={() => setOpciones("Depilacion")}
          >
            <span>Depilación</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
          <button className="button-option" onClick={() => setOpciones("A")}>
            <span>Alisados</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
        </div>
        <div className="container-buttons">
          <button
            className="button-option"
            onClick={() => setOpciones("Manicura")}
          >
            <span>Manicura</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
          <button
            className="button-option"
            onClick={() => setOpciones("Pestañas")}
          >
            <span>Pestañas</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
        </div>
        {/* <div className="container-buttons">
          <button
            className="button-option"
            onClick={() => setOpciones("Peinados")}
          >
            <span>Peinados (NO VA)</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
        </div> */}
        <div className="container-buttons">
          <button
            className="button-option"
            onClick={() => setOpciones("Masajes")}
          >
            <span>Masajes</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
          <button
            className="button-option"
            onClick={() => setOpciones("Cejas")}
          >
            <span>Cejas</span>
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
        </div>
        <div className="container-buttons"></div>
      </div>
    </>
  );
}

export default Opciones;
