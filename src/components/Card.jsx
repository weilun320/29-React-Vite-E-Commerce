import React from 'react'

function Card({ title, items }) {
  return (
    <>
      <h2 className="mb-3">{title}</h2>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-12 col-lg-4 mb-4" key={item + "-" + index}>
            <div className="shadow rounded-3 h-100 overflow-hidden">
              <div className="row">
                <div className="col-5 col-lg-12">
                  <a href="#">
                    <img alt={title + "-" + (index + 1)} className="w-100 object-fit-cover" height="300" loading="lazy" src={item.image} />
                  </a>
                </div>
                <div className="col-7 col-lg-12 px-lg-4 p-2 p-sm-3 card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between">
                      <a className="fs-5 fw-semibold link-dark link-underline-opacity-0 link-underline-opacity-50-hover" href="#">{item.name}</a>
                      <button className="btn p-0 pe-2"><i className="bi bi-heart"></i></button>
                    </div>
                    <p className="text-secondary mb-1 mb-sm-3">{item.description}</p>
                    {item.discount > 0
                      ? (
                        <>
                          <p className="mb-1 fw-semibold">-{item.discount}% off</p>
                          <p>
                            <span className="text-secondary text-decoration-line-through me-2">RM {item.price.toFixed(2)}</span>
                            <span className="text-danger">RM {(item.price * item.discount / 100).toFixed(2)}</span>
                          </p>
                        </>
                      )
                      : (
                        <p className="text-secondary">RM {item.price.toFixed(2)}</p>
                      )
                    }
                  </div>
                  <div>
                    <button className="btn btn-outline-secondary me-3 mb-1 mb-sm-0">Add To Cart</button>
                    <button className="btn btn-danger mb-1 mb-sm-0">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
