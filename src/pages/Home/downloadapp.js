import React from 'react'
import Directdownload from '../../assets/img/Directdownload.svg';
import Baazar from '../../assets/img/Baazar.svg';
import SibApp from '../../assets/img/Sibapp.svg';
import Mobile from '../../assets/img/Downloadapp.svg';
export default function downloadapp() {
    return (
        <section className="container-fluid">
            <section className="row  custom-row mt-5">
                <section className="col-xs-12 col-s-12 col-md-7">
                    <section className="section-right">
                        <section>
                            <h2>دانلود اپلیکیشن درمانیتو </h2>
                            <p>برای دریافت لینک دانلود شماره موبایل خود را وارد کنید</p>
                            <section className="position-relative">
                                <input type="tel" className="custom-input"
                                    placeholder="شماره تلفن خود را وارد کنید 09121212121" />
                                <button className="send" type="submit">بفرست</button>
                            </section>
                            <section className="download-app-btn">
                                <a href="#">
                                    <img src={Directdownload} alt="" />
                                </a>
                                <a href="#" >
                                    <img src={Baazar} alt="" />
                                </a>
                                <a className="btn-display" href="#">
                                    <img src={SibApp} alt="" />
                                </a>
                            </section>
                        </section>
                    </section>

                </section>
                <section className="col-xs-12 col-s-12 col-md-5">
                    <section className="position-relative">
                        <img className="mobile" src={Mobile} alt="" />
                    </section>
                </section>

            </section>
        </section>
    )
}
