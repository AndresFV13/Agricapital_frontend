import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src="/logo-header.png" alt="AgroMarket" />
          <h1>AgroMarket</h1>
        </div>
        <nav className={`header-nav ${isOpen ? 'visible' : ''}`}>
          <ul>
            <li><a href="#products-container">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Proveedores</a></li>
            <li><a href="#">Contacto</a></li>
            <button className='header-button-mobile'>
              Descubre más
            </button>
          </ul>
        </nav>
        <button className='header-button'>
          Descubre más
        </button>
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;