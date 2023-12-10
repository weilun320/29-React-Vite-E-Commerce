import React from 'react'

function Carousel({ carouselInfo }) {
  const { title, items } = carouselInfo;
  const id = (title.indexOf(" ")) ? title.replaceAll(" ", "") : title;

  return (
    <section className="container mb-5">
      <h2 className="mb-3">{title}</h2>
      <div id={"carousel" + id} className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div className={`carousel-item ${(index === 0) ? "active" : ""}`} key={title + "-" + index}>
              <a href="#"><img src={item.src} height="500" loading="lazy" className="d-block w-100 object-fit-contain" alt={title + "-" + (index + 1)} /></a>
              <div className="carousel-caption d-none d-md-block bg-light bg-opacity-75">
                <h5 className="text-dark">{item.name}</h5>
                <p className="text-dark">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={"#carousel" + id} data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={"#carousel" + id} data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;
