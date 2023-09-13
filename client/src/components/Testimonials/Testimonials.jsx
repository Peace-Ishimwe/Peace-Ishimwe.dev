import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <section className="pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] relative">
                <section>
                    What Our Client Said
                </section>
                <div className="absolute z-50 top-[-75%] right-0 bottom-0 flex items-center justify-center lg:pl-[120px] 2xl:pl-0">
                    <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                        <button className="text-primary hover:bg-blue-500 shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 transition-all hover:text-white">
                            <svg
                                width="15"
                                height="13"
                                viewBox="0 0 15 13"
                                className="fill-current"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="next-arrow cursor-pointer" onClick={handleNext}>
                        <button className="text-primary hover:bg-blue-500 shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 transition-all hover:text-white">
                            <svg
                                width="15"
                                height="13"
                                viewBox="0 0 15 13"
                                className="fill-current"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    ref={sliderRef}
                >
                    <SwiperSlide className="pb-[4rem]">
                        <SingleTestimonial
                            image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                            reviewAlt="lineicon"
                            details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                            name="Larry Diamond"
                            position="Chief Executive Officer."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleTestimonial
                            image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                            reviewAlt="lineicon"
                            details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                            name="Larry Diamond"
                            position="Chief Executive Officer."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleTestimonial
                            image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                            reviewAlt="lineicon"
                            details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                            name="Larry Diamond"
                            position="Chief Executive Officer."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleTestimonial
                            image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                            reviewAlt="lineicon"
                            details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                            name="Larry Diamond"
                            position="Chief Executive Officer."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleTestimonial
                            image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                            reviewAlt="lineicon"
                            details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                            name="Larry Diamond"
                            position="Chief Executive Officer."
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SingleTestimonial
                            image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                            reviewAlt="lineicon"
                            details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                            name="Larry Diamond"
                            position="Chief Executive Officer."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleTestimonial
                            image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                            reviewAlt="lineicon"
                            details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                            name="Larry Diamond"
                            position="Chief Executive Officer."
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Testimonials;

const SingleTestimonial = ({ image, reviewAlt, details, name, position }) => {
    return (
        <div className="max-w-sm w-full lg:max-w-full rounded-lg overflow-hidden  lg:flex dark:bg-ternary-dark bg-white shadow-lg hover:shadow-xl">
            <div className=" border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 dark:text-gray-200 leading-none text-base font-semibold">{name}</p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">{position}</p>
                    </div>
                </div>
                <div className="mb-8 mt-2">
                    <div className="text-gray-900 dark:text-gray-200 font-bold text-xl mb-2">{reviewAlt}</div>
                    <p className="text-gray-700 dark:text-gray-300 text-base">{details}</p>
                </div>
            </div>
        </div>
    );
};