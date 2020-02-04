import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div className="position-relative overflow-hidden  text-center ">
      <div className="row background">
        <div className="col-md-5 p-lg-5 mx-auto my-5 ">
          <h1> </h1>
          <h1 className="display-4 font-weight-normal">ShareFood</h1>
          <p className="lead font-weight-normal">
            L'appli pour un quartier sans gaspillage
          </p>
          <a className="btn btn-primary" href="/signup">
            Rejoignez Nous!
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="row" id="#2">
        <div className="col-lg-4 rounded-feature">
          <h1 className="features-icons">
            <i class="fas fa-user-friends"></i>
          </h1>
          <h2 className="text-center">Rencontrer</h2>
        </div>
        <div className="col-lg-4 rounded-feature">
          <h1 className="features-icons">
            <i class="far fa-handshake"></i>
          </h1>
          <h2 className="text-center">Partager</h2>
        </div>
        <div className="col-lg-4 rounded-feature">
          <h1 className="features-icons">
            <i class="fas fa-globe-europe"></i>
          </h1>
          <h2 className="text-center">Aider</h2>
        </div>
      </div>
      <br />
      <br />
      <div className="row featurette">
        <div className="col-md-6">
          <br />
          <br />
          <br />
          <h1 className="featurette-heading">
            Le Gaspillage Alimentaire
            <span className="text-muted"></span>
          </h1>
          <h3 className="lead">Un défi à relever ensemble</h3>
        </div>
        <div className="col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sIm5_9wMYZI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row">
        <br />
        <div className="col text-center">
          <h1 className="featurette-heading">ShareFood C'est </h1>
          <p></p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <div className="counter">
            <h1 className="features-icons">
              <i class="fas fa-users"></i>
            </h1>
            <h2
              className="timer count-title count-number"
              data-to="1540"
              data-speed="1500"
            ></h2>
            <h2 className="count-text ">Utilisateurs</h2>
          </div>
        </div>
        <div className="col">
          <div className="counter">
            <h1 className="features-icons">
              <i class="far fa-handshake"></i>
            </h1>
            <h2
              className="timer count-title count-number"
              data-to="3250"
              data-speed="1500"
            ></h2>
            <h2 className="count-text ">Dons partagés</h2>
          </div>
        </div>
        <div className="col">
          <div className="counter">
            <h1 className="features-icons">
              <i class="fas fa-carrot"></i>
            </h1>
            <h2
              className="timer count-title count-number"
              data-to="1900"
              data-speed="1500"
            >
              Kg
            </h2>
            <h2 className="count-text ">KG d'aliments sauvés</h2>
          </div>
        </div>
        <div className="col">
          <div className="counter">
            <h1 className="features-icons">
              <i class="fas fa-euro-sign"></i>
            </h1>
            <h2
              className="timer count-title count-number"
              data-to="14403"
              data-speed="1500"
            ></h2>
            <h2 className="count-text ">Economisés</h2>
          </div>
        </div>
      </div>
      <div className="row blog">
        <div className="col-md-12">
          <h1>Derniers Produits Ajoutés</h1>
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
                      <img
                        src="/images/1.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#">
                      <img
                        src="/images/2.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#">
                      <img
                        src="/images/3.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#">
                      <img
                        src="/images/4.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-3">
                    <a href="#">
                      <img
                        src="/images/5.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#">
                      <img
                        src="/images/6.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#">
                      <img
                        src="/images/7.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="#">
                      <img
                        src="/images/8.jpg"
                        alt="Image"
                        width="200"
                        height="200"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row featurette"></div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
