import "./servicios.css";
import WhatsAppButton from "./wspButon";

function Servicios({ servicios }) {
  const primeraAclaracion = servicios[0]?.aclaraciones1;
  const masajesRender = servicios[0]?.categoria;

  return (
    <>
      <div className="container-servicios">
        <h1 className="title-servicios" id="precios">
          Precios
        </h1>

        <div className="container-precios">
          <div className="container-categoria">
            {servicios[0] ? (
              <h1 className="title-categoria">{servicios[0]?.categoria}</h1>
            ):<h1>Seleccione un servicio</h1> }
           
            
          </div>
          {servicios?.map((servicio, index) => (
            <div key={index} className="container-categoria-and-img">
              <div className="container-variacion">
                <span>{servicio.variacion}</span>
              </div>
              <div className="container-general-variacion-and-precio">
                <div className="container-variacion-and-precio">
                  {masajesRender == "Masajes" ? (
                    <div className="container-aclaraciones-masajes">
                      <h3 className="texto-aclaraciones-masajes">
                        {servicio.aclaraciones}
                      </h3>
                      <hr />
                    </div>
                  ) : null}
                  {/* <h3 className="variacion">{servicio.variacion}</h3> */}
                  <h3 className="precio">${servicio.precio}</h3>
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

// acomodar la variación a la izquierda, precio a la derecha, la categoría una sola vez
// arriba de todo a la izquierda y arreglar que se vean todas las aclaraciones de masajes.
