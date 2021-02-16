import React, { useState } from 'react'

export default function Post() {
    const [collapse, setCollapse] = useState(false)
    
    return (
        <>
            <h5 className="my-5" onClick={() => setCollapse(!collapse)}>
                هزینه ای درمانیتو برای پیدا کردن دارو پیدا میکنه ؟
              </h5>
            {
                collapse ? <section>
                    <section className="card card-body border-0">
                        <p className="custom-border ml-4">
                            خیر هیچ هزینه ای دریافت نمیشه
                  </p>
                    </section>
                </section> : null
            }
        </>
    )
}
