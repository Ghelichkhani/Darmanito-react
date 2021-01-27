import React from 'react'
import Support from '../assets/img/support.svg'
export default function _support() {
    return (
        <section className="container-fluid mt-6-custom p-5 support">
            <section className="container ">
                <section className="row ">
                    <section className="col-xs-12 col-s-12 col-md-7">
                        <section className="support-content mt-3 mb-3 d-flex ">
                            <h3>پشتیبانی درمانیتو</h3>
                            <p>پاسخگویی همه روزه از 9 صبح تا 9 شب</p>
                        </section>
                    </section>
                    <section className="col-xs-12 col-s-12 col-md-5">
                        <img className="support-img" src={Support} alt="" />
                    </section>

                </section>
            </section>
        </section>
    )
}
