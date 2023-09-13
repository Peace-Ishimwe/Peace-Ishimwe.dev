import React from 'react'

const Doings = () => {
    return (
        <section className="service text-primary-dark dark:text-ternary-light">

            <h3 className="h3 service-title text-3xl font-semibold text-center">What i'm doing</h3>

            <ul className="service-list">

                <li className="service-item">

                    <div className="service-icon-box">
                        {/* <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40"> */}
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web development</h4>

                        <p className="service-item-text">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>

                </li>

                <li className="service-item">

                    <div className="service-icon-box">
                        {/* <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40"> */}
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Mobile apps</h4>

                        <p className="service-item-text">
                            Professional development of applications for iOS and Android.
                        </p>
                    </div>

                </li>

                <li className="service-item">

                    <div className="service-icon-box">
                        {/* <img src="./assets/images/icon-design.svg
          " alt="design icon" width="40"> */}
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web design</h4>

                        <p className="service-item-text">
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>

                </li>

                <li className="service-item">

                    <div className="service-icon-box">
                        {/* <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" /> */}
                    </div>

                    <div className="service-content-box" >
                        <h4 className="h4 service-item-title">Embeded systems</h4>

                        <p className="service-item-text">
                            Unlock endless tech opportunities by learning embedded systems design and development.
                        </p>
                    </div>

                </li>

            </ul>

        </section>
    )
}

export default Doings