import React from 'react'

function Banner({ alt, image, title, link }) {
  return (
    <>
      <div className="position-relative">
        <img alt={alt} className="rounded-3 w-100 object-fit-cover" height="600" loading="lazy" src={image} />
        <div className="p-3 position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="bg-light bg-opacity-75 p-3 rounded-3">{title}</h1>
          <a className="btn btn-dark" href="#">{link} &rarr;</a>
        </div>
      </div>
    </>
  );
}

export default Banner;
