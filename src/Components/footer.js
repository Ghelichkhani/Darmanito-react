import React from 'react'
import Instagram from '../assets/img/Instagram.svg';
import Twitter from '../assets/img/Twitter.svg';
import Linkedin from '../assets/img/linkedin.svg';
import BlackSibapp from '../assets/img/BlackSibapp.svg';
import BlackBaazar from '../assets/img/blackBaazar.svg';
import Logo from '../assets/img/logo.svg'
export default function footer() {
    return (
        <section className="container-fluid mt-5 mb-5 ">
            <section className="container">
                <section className="row">
                    <section className="col-xs-12 col-s-12 col-md-4">
                        <img src={Logo} alt="" />
                        <section className="footer-content">

                            <h4>سوپراپلیکیشن حوزه درمان و سلامت</h4>
                            <p>تمامی حقوق مادی و معنوی این سایت متعلق به سایت درمانیتو است</p>
                        </section>

                        <section className="social-media-icon">
                            <img src={Linkedin} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Instagram} alt="" />
                        </section>

                    </section>
                    <section className="col-xs-12 col-s-12 col-md-2 dis-none">
                        <section className="coltwo">
                            <h5>خدمات درمانیتو</h5>
                            <p className="custom-border"> داروخانه انلاین</p>
                            <p> فروشگاه انلاین</p>
                            <p> ویزیت انلاین </p>
                            <p> پرونده پزشکی</p>
                        </section>
                    </section>
                    <section className="col-xs-12 col-s-12 col-md-2 dis-none">
                        <section className="colthree">
                            <h5>صفحات درمانیتو</h5>
                            <p className="custom-border">تماس با ما </p>
                            <p>درباره ما </p>
                            <p>سوالات متداول </p>
                            <p>قوانین و شرایط</p>
                        </section>

                    </section>
                    <section className="col-xs-12 col-s-12 col-md-4 dis-none">
                        <section className="colfour ">
                            <h5 className="">دانلود درمانیتو</h5>
                            <img src={BlackBaazar} alt="" />
                            <img src={BlackSibapp} alt="" />
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}
