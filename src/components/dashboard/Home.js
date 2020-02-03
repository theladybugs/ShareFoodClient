import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="row">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Punny headline</h1>
          <p className="lead font-weight-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container">
        <div className="row" id="#2">
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>

          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2>Heading</h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>

          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
        </div>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
        <div className="row">
          <br />
          <div className="col text-center">
            <h2>Bootstrap 4 counter</h2>
            <p>counter to count up to a target number</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <div className="counter">
              <i className="fa fa-code fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="100"
                data-speed="1500"
              ></h2>
              <p className="count-text ">Our Customer</p>
            </div>
          </div>
          <div className="col">
            <div className="counter">
              <i className="fa fa-coffee fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="1700"
                data-speed="1500"
              ></h2>
              <p className="count-text ">Happy Clients</p>
            </div>
          </div>
          <div className="col">
            <div className="counter">
              <i className="fa fa-lightbulb-o fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="11900"
                data-speed="1500"
              ></h2>
              <p className="count-text ">Project Complete</p>
            </div>
          </div>
          <div className="col">
            <div className="counter">
              <i className="fa fa-bug fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="157"
                data-speed="1500"
              ></h2>
              <p className="count-text ">Coffee With Clients</p>
            </div>
          </div>
        </div>
        <div className="row blog">
          <div className="col-md-12">
            <div
              id="blogCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#blogCarousel" data-slide-to="1"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
