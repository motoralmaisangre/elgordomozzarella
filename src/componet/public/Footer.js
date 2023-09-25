import React, { useState } from "react";

const Footer = () => {
  const [numero, setNumero] = useState(0);
  const handleSumador = () => {
    setNumero(numero + 1);
  };

  return (
    <div className="container2">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; 2023 Company, Inc</p>
        <span onClick={handleSumador}>
        <img className="App-logo" src="icopiz90.png"  alt="logogirando" />
        </span>
        
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;