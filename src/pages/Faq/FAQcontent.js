import React from 'react'
import pharmacy from '../../assets/img/pharmacy.svg';
import store from '../../assets/img/store.svg';
import doctor from '../../assets/img/doctor.svg';
import calender from '../../assets/img/cal.svg';

export default function FAQcontent() {
    return (
        <section className="container">
        <section className="row">
          <section className="col-12 FAQ-Content">
            <h5 className="custom-border">سوال شما درباره کدام سرویس هست ؟</h5>
            <section
              className="mt-5 mb-6-custom d-flex justify-content-around align-items-center flex-wrap services "
            >
              <section>
                <img src={pharmacy} alt="" />
                <p>داروخانه</p>
              </section>

              <section>
                <img src={store} alt="" />
                <p>فروشگاه</p>
              </section>

              <section>
                <img src={doctor} alt="" />
                <p>ویزیت آنلاین</p>
              </section>
              <section>
                <img src={calender} alt="" />
                <p>نوبت دهی آنلاین</p>
              </section>
            </section>
            
            <section className="col-12 collapse-group">
              <h5 data-toggle="collapse" data-target="#collapse1" className="my-5">
                هزینه ای درمانیتو برای پیدا کردن دارو پیدا میکنه ؟
              </h5>
              <section className="collapse" id="collapse1">
                <section className="card card-body border-0">
                  <p className="custom-border ml-4">
                    خیر هیچ هزینه ای دریافت نمیشه
                  </p>
                </section>
              </section>
              <h5 data-toggle="collapse" data-target="#collapse2" className="my-5">
                هزینه ای درمانیتو برای پیدا کردن دارو پیدا میکنه ؟
              </h5>
              <section className="collapse" id="collapse2">
                <section className="card card-body border-0">
                  <p className="custom-border ml-4">
                    خیر هیچ هزینه ای دریافت نمیشه
                  </p>
                </section>
              </section>
              <h5 data-toggle="collapse" data-target="#collapse3" className="my-5">
                هزینه ای درمانیتو برای پیدا کردن دارو پیدا میکنه ؟
              </h5>
              <section className="collapse" id="collapse3">
                <section className="card card-body border-0">
                  <p className="custom-border ml-4">
                    خیر هیچ هزینه ای دریافت نمیشه
                  </p>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    )
}
