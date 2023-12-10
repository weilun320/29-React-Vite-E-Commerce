import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="row bg-warning align-items-center justify-content-center m-0 py-4">
        <div className="col-12 col-md-auto text-center fs-2 fw-bold">BECOME A MEMBER & GET 15% OFF</div>
        <div className="col-12 col-md-auto text-center"><a className="btn btn-dark" href="#">SIGN UP FOR FREE &rarr;</a></div>
      </div>
      <div className="bg-light p-5 mx-lg-5">
        <div className="row mb-3">
          <div className="col-6 col-md-3 mb-3">
            <p className="fw-bold fs-5">Products</p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Apparel</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Sneakers</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Accessories</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Top Sellers</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Exclusives</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Value Buy</a>
            </p>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <p className="fw-bold fs-5">Company Info</p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">About Us</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Store Locator</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Careers</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">News</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Sustainability</a>
            </p>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <p className="fw-bold fs-5">Support</p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Help & Customer Service</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Payment Options</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Order Status</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Delivery</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Return Policy</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Promotions</a>
            </p>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <p className="fw-bold fs-5">Account</p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Membership</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Profile</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Coupons</a>
            </p>
            <p className="mb-1">
              <a className="link-dark link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Gift Wrapping Service</a>
            </p>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <p className="fw-bold fs-5">Follow Us</p>
          <a className="col-auto" href="#"><i className="fs-4 bi bi-facebook"></i></a>
          <a className="col-auto" href="#"><i className="fs-4 bi bi-instagram"></i></a>
          <a className="col-auto" href="#"><i className="fs-4 bi bi-twitter"></i></a>
          <a className="col-auto" href="#"><i className="fs-4 bi bi-pinterest"></i></a>
        </div>
      </div>
      <div className="text-center p-4 bg-dark text-light">&copy; 2023 Wei Lun. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
