import React from 'react'
import Map from '../../assets/img/map.svg';
export default function ContactusContent() {
    return (
<section class="container">
        <section class="row mt-6-custom mb-6-custom">
          <section class="col-12 col-md-6 order-md-first">
            <form
              name="myform"
              id="custom-contact-form"
              method="post"
              action="#"
            >
              <section class="form-group pb-3">
                <label for="exampleFormControlInput1">نام و نام خانوادگی</label>
                <input
                  id="username"
                  type="text"
                  name="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="نام و نام خانوادگی"
                />
                <span id="error_text_name" class="text-danger"></span>
              </section>
              <section class="form-group pb-3">
                <label for="exampleFormControlInput1"
                  >ایمیل یا شماره همراه</label
                >
                <input
                  id="phone"
                  type="text"
                  name="tell"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ایمیل یا شماره همراه"
                />
                <span id="error_text_phone" class="text-danger"></span>
              </section>

              <section class="form-group pb-3">
                <label for="exampleFormControlTextarea1">پیام شما</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </section>
              <section class="form-group">
                <button
                  type="submit"
                  value="register"
                  class="btn btn-outline-primary w-100"
                >
                  ارسال پیام
                </button>
                <span id="success_text" class="text-success text-center"></span>
              </section>
            </form>
          </section>

          <section class="col-12 col-md-6 order-first ">
            <img src={Map} alt="" class="w-100" />
          </section>


        </section>
      </section>
    )
}
