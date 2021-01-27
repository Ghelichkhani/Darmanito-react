import React from "react";

export default function Form1() {
  return (
    <section>
      <section className=" my-5">
        <section className="container ">
          <section className="row mt-5">
            <section className="col-12 col-md-5 custom-col-2">
                <h5 className="my-5">عضویت به عنوان داروخانه </h5>
              <form>
                <div className="form-group">
                  <label for="drugStoreManager">نام و نام خانوادگی موسس</label>
                  <input
                    type="text"
                    className="form-control"
                    id="drugStoreManager"
                    aria-describedby="emailHelp"
                    placeholder="نام و نام خانوادگی موسس "
                  />
                </div>
                <div className="form-group">
                  <label for="medicalSystemNumber">شماره نظام پزشکی </label><span className="text-blue"> (فقط عدد)</span>
                  <input
                    type="number"
                    className="form-control"
                    id="medicalSystemNumber"
                    aria-describedby="emailHelp"
                    placeholder="فقط بخش عددی را وارد کنید"
                  />
                </div>
                <div className="form-group">
                  <label for="drugStoreName">نام داروخانه/فروشگاه  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="drugStoreName"
                    aria-describedby="emailHelp"
                    placeholder="نام داروخانه شما در اپلیکیشن"
                  />
                </div>
                <div class="form-group">
                  <label for="drugStorePhone">شماره داروخانه  </label>
                  <input
                    type="tell"
                    className="form-control"
                    id="drugStorePhone"
                    aria-describedby="emailHelp"
                    placeholder="به عنوان اطلاعات تماس به کاربر نشان داده می شود"
                  />
                </div>
                <button type="submit" className="btn btn-primary text-left">
                  مرحله بعد
                </button>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
