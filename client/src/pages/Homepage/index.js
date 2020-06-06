import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <React.Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{height: "50%"}}>
          <div className="carousel-item active tales carousel-inner">
            <img
              src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1562552052-c72ceddf93dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "white", color: "black", height: 600 }}
      >
        <div className="container">
          <div className="col text-center">
            <Link
              to="/signup"
              className="btn btn-custom-homepage zoom btn-lg"
              href="#"
              role="button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div> */}
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Cocktails</h5>
                <p className="card-text">
                  Explore our wide selection of drinks to discover your new
                  favorite or to find recipes for new drinks to try.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Meals</h5>
                <p className="card-text">
                  Sample any of our delicious meals or search for your favorite
                  to lear how to make it yourself.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Movies</h5>
                <p className="card-text">
                  Be transported to new and familiar worlds with our incredible
                  movie section to help you find the perfect movie for a date or
                  to entertain the kids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
