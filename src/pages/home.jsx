import "./home.css";

import Servicios from "../components/servicios";
import {
  Alisados,
  Cejas,
  Cursos,
  Depilacion,
  Masajes,
  Peinados,
  Pestañas,
  Uñas,
} from "../components/arrays";
import SliderCarousel from "../components/slider";
import Opciones from "../components/opciones";
import { useEffect, useState } from "react";
import WhatsAppButton from "../components/wspButon";
import FooterContact from "../components/foter";

function Home() {
  const [opciones, setOpciones] = useState("");
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    if (opciones == "Cursos") {
      setServicios(Cursos);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (opciones == "Depilacion") {
      setServicios(Depilacion);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (opciones == "Manicura") {
      setServicios(Uñas);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (opciones == "Pestañas") {
      setServicios(Pestañas);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (opciones == "Peinados") {
      setServicios(Peinados);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } 
    else if (opciones == "A") {
      console.log("Alisados: ", Alisados); 
      setServicios(Alisados);
     
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
     else if (opciones == "Masajes") {
      console.log("Alisados: ", Alisados); 
      setServicios(Masajes);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
     else if (opciones == "Cejas") {
      setServicios(Cejas);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [opciones]);

  return (
    <div className="container-home">
      <h1 className="title-home" id="inicio">Beauty Studio D'art</h1>
      <img src="/logo/logo-beauty-studio.jpg" alt="" className="logo-home" />
      <SliderCarousel></SliderCarousel>
      <WhatsAppButton></WhatsAppButton>
      <Opciones setOpciones={setOpciones}></Opciones>
      <Servicios servicios={servicios}></Servicios>
      <FooterContact></FooterContact>
    </div>
  );
}

export default Home;
