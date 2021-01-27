import React from "react";
import sliderImg from '../../assets/img/sliderimg.svg'
export default function slider() {
  return (
    <section className="container-fluid">
      <section className="row mt-5 slider">
        <section className="col-sm-6 col-md-6 custom-order">
          <section className="d-flex justify-content-center align-items-center">
            <section className="mt-6-custom sm-margin-top text-md-left text-sm-center">
              <h1>اپلیکیشن درمانیتو</h1>
              <p>درمانیتو، سامانه هوشمند درمان و سلامت</p>
              <button
                type="button"
                className="btn btn-primary d-block d-md-inline "
              >
                دانلود درمانیتو
              </button>
              <button
                type="button"
                className="btn btn-outline-primary d-block d-md-inline "
              >
                عضویت داروخانه ها
              </button>
            </section>
          </section>
        </section>
        <section className="col-sm-6 col-md-6">
          <img className="mr-3 w-100" src={sliderImg} alt="" />
        </section>
      </section>
    </section>
  );
}
