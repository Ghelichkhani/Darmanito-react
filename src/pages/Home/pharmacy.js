import React from 'react'
import doctorimg from '../../assets/img/doctorimg.svg'
export default function pharmacy() {
    return (
        <section class="container mt-6-custom">
            <section class="row custom-shadow d-flex">

                <section class=" col-sm-12 col-md-7 order-content mt-7-custom sm-margin-top">
                    <section class="pharmacy-content ">
                        <h2 class="custom-border text-medium-blue mt-5">عضویت داروخانه یا مراکز بهداشتی</h2>
                        <p class="mt-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                            طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی </p>
                        <section class="position-relative mt-md-5 mt-sm-3">
                            <input type="tel" class="custom-input" placeholder="شماره تلفن خود را وارد کنید " />
                            <button class="send" type="submit">ثبت نام سریع</button>
                        </section>
                    </section>
                </section>

                <section class=" col-sm-12 col-md-5 order-img mt-5">
                    <section class="doctor-img">
                        <img src={doctorimg} alt="" />
                    </section>
                </section>


            </section>
        </section>
    )
}
