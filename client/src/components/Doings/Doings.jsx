import React from 'react'
import IconWeb from '../../images/Doings/icon-dev.svg'
import IconApp from '../../images/Doings/icon-app.svg'
import IconDesign from '../../images/Doings/icon-design.svg'
import IconEmbeded from '../../images/Doings/icon-photo.svg'

const Doings = () => {
    return (
        <section className="service text-primary-dark dark:text-ternary-light">

            <h3 className="h3 service-title font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light text-center">What i'm doing</h3>

            <ul className="service-list mt-[3rem]">

                <li className="service-item bg-secondary-light dark:bg-ternary-dark !shadow-lg hover:!shadow-xl flex gap-[2rem]">

                    <div className="service-icon-box">
                        <img src={IconWeb} alt="Web development icon" width="40" className='min-w-[40px]' />
                    </div>

                    <div className="service-content-box !text-start">
                        <h4 className="h4 service-item-title font-semibold text-xl text-ternary-dark dark:text-ternary-light">Web development</h4>

                        <p className="service-item-text text-lg font-medium">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>

                </li>

                <li className="service-item bg-secondary-light dark:bg-ternary-dark !shadow-lg hover:!shadow-xl flex gap-[2rem]">

                    <div className="service-icon-box">
                        <img src={IconApp} alt="mobile app icon" width="40" className='min-w-[40px]' />
                    </div>

                    <div className="service-content-box !text-start">
                        <h4 className="h4 service-item-title font-semibold text-xl text-ternary-dark dark:text-ternary-light">Mobile apps</h4>

                        <p className="service-item-text text-lg font-medium">
                            Professional development of applications for iOS and Android.
                        </p>
                    </div>

                </li>

                <li className="service-item bg-secondary-light dark:bg-ternary-dark !shadow-lg hover:!shadow-xl flex gap-[2rem]">

                    <div className="service-icon-box">
                        <img src={IconDesign} alt="design icon" width="40" className='min-w-[40px]' />
                    </div>

                    <div className="service-content-box !text-start">
                        <h4 className="h4 service-item-title font-semibold text-xl text-ternary-dark dark:text-ternary-light">Web design</h4>

                        <p className="service-item-text text-lg font-medium">
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>

                </li>

                <li className="service-item bg-secondary-light dark:bg-ternary-dark !shadow-lg hover:!shadow-xl flex gap-[2rem]">

                    <div className="service-icon-box">
                        <img src={IconEmbeded} alt="camera icon" width="40" className='min-w-[40px]' />
                    </div>

                    <div className="service-content-box !text-start">
                        <h4 className="h4 service-item-title font-semibold text-xl text-ternary-dark dark:text-ternary-light">Embeded systems</h4>

                        <p className="service-item-text text-lg font-medium">
                            Unlock endless tech opportunities by learning embedded systems design and development.
                        </p>
                    </div>

                </li>

            </ul>

        </section>
    )
}

export default Doings