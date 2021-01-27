import React from 'react'
import pharmacy from '../../assets/img/pharmacy.svg';
import store from '../../assets/img/store.svg';
import doctor from '../../assets/img/doctor.svg';
import calender from '../../assets/img/cal.svg';
import Arrow from '../../assets/img/arrow.svg';
import Arrowsubmit from '../../assets/img/arrowsubmit.svg'
export default function services() {
    return (
        <section className="container-fluid mt-6-custom">
        <section className="container">
            <h2 className="custom-border">امکانات درمانیتو</h2>
            <section className="row mt-5">
                <section className="col-12 col-md-4 custom-grid">
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

                <section className="col-12 col-md-8">
                    <h4>داروخانه آنلاین</h4>
                    <p className="pt-4 pb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                        از طراحان گرافیک
                        است، چاپگرها و متون بلکه .</p>

                    <img src={Arrow} alt="" />
                    <span className="ml-3">قدم اول</span>
                    <p className="step">لورم ایپسوم متن ساختگی با تولید سادا
                        استفاده .</p>

                    <img src={Arrow} alt="" />
                    <span className="ml-3">قدم دوم</span>
                    <p className="step">لورم ایپسوم متن ساختگی با تولیبا
                        استفاده ا</p>

                    <img src={Arrowsubmit} alt="" />
                    <span className="ml-3">قدم سوم</span>
                    <p className="step">لورم ایپسوم متن ساختگی با تولید و با
                        استفاده ا</p>
                </section>
            </section>
        </section>
    </section>
    )
}
