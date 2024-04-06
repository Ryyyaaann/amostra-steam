import React from 'react';
import './Navbar.css'; // Importa o arquivo de estilo

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/loja" className="nav-link">Loja</a>
        </li>
        <li className="nav-item">
          <a href="/Sobre" className="nav-link">Sobre</a>
        </li>
        <li className="nav-item">
          <a href="/Suporte" className="nav-link">Suporte</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
