import React from 'react'
import playvideo from '../../assets/img/play-video.svg';
import Motmaen from '../../assets/img/Motmaen.svg';
import BeSarfeh from '../../assets/img/BeSarfeh.svg';
import Rahat from '../../assets/img/Rahat.svg';
import Jostojoo from '../../assets/img/Jostojoo.svg';
export default function aboutus() {
    return (
        <section className="container-fluid">

            <section className="container">
                <section className="row mt-5">
                    <section className="col-12 col-md-4">
                        <img className="w-100" src={playvideo} alt="" />
                    </section>
                    <section className="col-12 col-md-8">
                        <h3 className="custom-border mt-5">درباره درمانیتو</h3>
                        <p className="mt-5">درمانیتو یک سامانه است که امکان سفارش دارو ، محصولات آرایشی بهداشتی ،
                            نوبت
                            گیری و مشاوره پزشکان را به راحتی و به صورت آنلاین فراهم کرده است.</p>

                        <section className="about-us-items d-none d-md-flex mt-5">
                            <section>
                                <img src={Motmaen} alt="" />
                                <p>مطمئن</p>
                            </section>

                            <section>
                                <img src={BeSarfeh} alt="" />
                                <p>به صرفه</p>
                            </section>

                            <section>
                                <img src={Rahat} alt="" />
                                <p>راحت</p>
                            </section>
                            <section>
                                <img src={Jostojoo} alt="" /> 
                                <p>جستجو</p>
                            </section>
                        </section>

                    </section>
                </section>
            </section>

        </section>
    )
}
