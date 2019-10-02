import React from "react";
import sideImage from "../image/newsbg.jpg";
import sideImage2 from "../image/9-1.jpg";

const Main = () => {
  return (
    <div>
        <section class="modal fade" id="modal-video" tabindex="-1" role="dialog" aria-labelledby="modal-video-header" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-video modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-white" id="modal-video-header">
                Video demonstration
              </h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <video src="https://www.youtube.com/watch?v=9cnbg5SbIYM" class="img-fluid" controls></video>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 offset-xl-1 order-md-2 section pt-md-0 pb-0">
                <a href="#modal-video" className="btn btn-lg btn-circle btn-hero ml-4 bg-white shadow text-body d-none d-md-block" data-toggle="modal">
                  <i className="fas fa-play" />
                </a>
                <div className="img-half">
                  <img src={sideImage} alt="..." className="img-cover img-incline-left" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-5 order-md-1 section">
                <p className="mt-5 font-weight-medium text-xs text-uppercase text-primary animate" data-toggle="animation" data-animation="fadeUp" data-animation-order={0} data-animation-trigger="load">
                  Premium quality watches
                </p>
                <h1 className="mb-4 animate" data-toggle="animation" data-animation="fadeUp" data-animation-order={1} data-animation-trigger="load">
                  Men's watches crafted with attention to detail
                </h1>
                <p className="mb-5 text-muted animate" data-toggle="animation" data-animation="fadeUp" data-animation-order={2} data-animation-trigger="load">
                  Dicta itaque ad iusto perspiciatis eum alias quibusdam, odit id pariatur repudiandae ipsum, nostrum nisi.
                </p>
                <a href="/store" className="btn btn-outline-primary animate" data-toggle="animation" data-animation="fadeUp" data-animation-order={3} data-animation-trigger="load">
                  Go to store <i className="fas fa-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section pb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-5 offset-lg-1">
                <div className="img-effect img-effect-solid mb-5 mb-md-0">
                  <img src={sideImage2} className="img-fluid" alt="..." />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 offset-lg-1">
                <h2 className="mb-4">
                  Swiss-made engineering excellence
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, maiores, aperiam. Excepturi assumenda non
                  quasi ipsa quidem harum debitis aut alias dicta. Laudantium reprehenderit ea, suscipit nulla deleniti
                  excepturi repudiandae!
                </p>
                <a href="#modal-video" data-toggle="modal" className="btn btn-outline-primary btn-circle mr-3">
                  <i className="fas fa-play" />
                </a> Play video
              </div>
            </div>
          </div>
        </section>
    </div>

  );
};

export default Main;