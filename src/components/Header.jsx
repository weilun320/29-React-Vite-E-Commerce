import React from 'react'

function Header() {
  return (
    <>
      <div className="pt-4">
        <div className="w-100 position-relative mt-5 pt-2">
          <img alt="Christmas" className="object-fit-cover w-100" height="600" loading="lazy" src="./assets/christmas-background.jpg" />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="fw-bold text-light">Celebrate the Joy of Christmas</h1>
            <p className="fs-5 text-light">Grab your gift now and get free wrapping!</p>
            <a className="btn btn-outline-light" href="#">Check out more!</a>
          </div>
          <div className="w-100 mb-5 pb-4 position-absolute top-100 start-50 translate-middle text-center">
            <div className="bg-dark bg-opacity-50 text-light">
              Valid for online and in-store purchse, while stocks last. T&Cs apply.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
