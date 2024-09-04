import "./servicios.css";

function Servicios({ servicios }) {
  const primeraAclaracion = servicios[0]?.aclaraciones;
  return (
    <>
      <div className="container-servicios">
      <h1 className="title-servicios" id="precios">Precios</h1>

      <div className="container-precios">
        {servicios?.map((servicio, index) => (
          <div key={index} className="container-categoria-and-img">
            <div className="container-categoria">
              <span>{servicio.categoria}</span>
            </div>
            <img src={servicio.imagen} alt={servicio.categoria} className="logo" />
            <div className="container-general-variacion-and-precio">
              <div className="container-variacion-and-precio">
                <h3>{servicio.variacion}</h3>
                <h3>${servicio.precio}</h3>
              </div>
            </div>
          </div>
        ))}
            <div>
      {primeraAclaracion && primeraAclaracion !== "null" ? (
        <p>{primeraAclaracion}</p>
      ) : (
        <p></p>
      )}
    </div>
      </div>
    </div>
    </>
  );
}

export default Servicios;
