import "./nav.css";

function Nav() {
  return (
    <nav>
      <div className="container-logo-and-title">
        <img src="/logo/logo-beauty-studio.jpg" alt="" className="logo" />
        <h1 className="title">Beauty Studio D'art</h1>
      </div>
      <div className="container-links">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#precios ">Precios</a>

      </div>
    </nav>
  );
}

export default Nav;
