import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../public/assets/logo.png" alt="Wei Lun.co" className="object-fit-cover rounded-3" width="150" height="80" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="sidebar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">New Arrivals</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Men
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Clothing</a></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Women
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Clothing</a></li>
                <li><a className="dropdown-item" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link link-danger" href="#">Value Buy</a>
            </li>
          </ul>
          <div className="row">
            <a className="col-auto" href="#"><i className="fs-5 bi bi-search"></i></a>
            <a className="col-auto" href="#"><i className="fs-5 bi bi-heart-fill"></i></a>
            <a className="col-auto" href="#"><i className="fs-5 bi bi-cart"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
