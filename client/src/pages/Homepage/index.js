import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

function Homepage() {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <React.Fragment>
      <AliceCarousel
        mouseTrackingEnabled
        autoPlayInterval={3000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
      >
        <div className="col text-center">
          <img
            src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            onDragStart={handleOnDragStart}
            className="img-carousel"
          />
        </div>
        <div className="col text-center">
          <img
            src="https://images.unsplash.com/photo-1562552052-c72ceddf93dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
        </div>
        <div className="col text-center">
          <img
            src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
        </div>
        <div className="col text-center">
          <img
            src="/img4"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
        </div>
        <div className="col text-center">
          <img
            src="/img5"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
        </div>
      </AliceCarousel>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">FootVolley</h5>
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
                <h5 className="card-title text-center">Soccer</h5>
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
                <h5 className="card-title text-center">Volleyball</h5>
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
