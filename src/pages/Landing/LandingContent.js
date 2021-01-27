import React from 'react'
import User from '../../assets/img/user.svg';
import Card1 from '../../assets/img/card1.svg';
import Card2 from '../../assets/img/card2.svg';
export default function LandingContent() {
    return (
        <section className=" my-5">
        <section className="container ">
        <section className="row mt-5">
          <section className="col-sm-12 col-md-6 custom-col-2">
            <section className="landing-content">
              <h3>شماهم در درمان و سلامت مردم کشورمون موثر باشید</h3>
              <p>
                با ثبت نام به عنوان داروخانه یا فروشگاه شما هم به سیستم درمان
                کمک کنید و به هزاران کاربر خدمات ارائه بدهید و روزانه درامد
                سفارش های خودتون رو تسویه کنید
              </p>
              <input
                type="tel"
                className="custom-landing-input"
                placeholder="شماره تلفن خود را وارد کنید"
              />
              <button type="submit" className="custom-landing-send">
                ثبت نام سریع
              </button>
            </section>
          </section>
          <section className="col-sm-12 custom-col-1 col-md-6">
            <section className="drug-store position-relative">
              <section className="d-flex your-drug-store blur0">
                <img className="" src={User} alt="" />
                <section className="">
                  <h5>نام داروخانه شما</h5>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>درمانیتو سرویس داروخانه
                    داروخانه شما
                  </p>
                </section>
                <span>شبانه روزی</span>
              </section>

              <section className="your-drug-store blur1 dis-none dis-block">
                <img className="" src={User} alt="" />
                <section className="mx-5">
                  <h5>نام داروخانه شما</h5>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>درمانیتو سرویس داروخانه
                    داروخانه شما
                  </p>
                </section>
                <span>شبانه روزی</span>
              </section>

              <section className="your-drug-store blur2 dis-none dis-block">
                <img className="" src={User} alt="" />
                <section className="mx-5">
                  <h5>نام داروخانه شما</h5>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>درمانیتو سرویس داروخانه
                    داروخانه شما
                  </p>
                </section>
                <span>شبانه روزی</span>
              </section>
            </section>
          </section>
          
        </section>
      </section>
      <section className="container-fluid p-5 support mt-md-6-custom">
      <section className="container">
        <section
          className="row statistics d-flex justify-content-between align-items-center"
        >
          <section className="text-center">
            <p>تعداد کاربران درمانیتو</p>
            <h5>120,000+</h5>
          </section>
          <section className="text-center">
            <p>تعداد کاربران درمانیتو</p>
            <h5>120,000+</h5>
          </section>
          <section className="text-center">
            <p>تعداد کاربران درمانیتو</p>
            <h5>120,000+</h5>
          </section>
        </section>
      </section>
    </section>
    <section className="container">
        <section className="mt-5">
          <h5 className="custom-border">در درمانیتو چه خدماتی ارائه خواهید داد؟</h5>
          <p>خدمات مورد نظر خود را انتخاب کنید</p>
        </section>
        <section className="row">
          <section className="col-12 col-md-6 d-flex justify-content-center">
            <section
              className="mt-5 mb-6-custom d-flex justify-content-around align-items-center flex-wrap custom-shadow w-75 py-5"
            >
              <section className="text-center">
                <img src={Card2} alt="" />
                <section className="card-body text-left">
                  <h5>داروخانه</h5>
                  <p>
                    مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا
                    سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم
                  </p>
                </section>
                <a href="#" className="btn btn-primary">ثبت نام</a>
              </section>
            </section>
          </section>
          <section className="col-12 col-md-6 d-flex justify-content-center">
            <section
              className="mt-5 mb-6-custom d-flex justify-content-around align-items-center flex-wrap custom-shadow w-75 py-5"
            >
              <section className="card-body text-center">
                <img src={Card1} alt="" />
                <section className="card-body text-left">
                  <h5>فروشگاه آرایشی و بهداشتی</h5>
                  <p>
                    مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا
                    سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم
                  </p>
                </section>
                <a href="#" className="btn btn-primary">ثبت نام</a>
              </section>
            </section>
          </section>
        </section>
      </section>

        </section>
   
    )
}
