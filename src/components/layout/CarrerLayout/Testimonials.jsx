import React from 'react';
import { motion } from 'framer-motion';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import './Testimonial.css';

const testimonials = [
    { id: 1, src: 'src/assets/images/testimonials/Newage.png', alt: 'Testimonial Image 1' },
    { id: 2, src: 'src/assets/images/testimonials/Nexus.png', alt: 'Testimonial Image 2' },
    { id: 3, src: 'src/assets/images/testimonials/Nimbja.png', alt: 'Testimonial Image 3' },
    { id: 4, src: 'src/assets/images/testimonials/SmartMatrix.png', alt: 'Testimonial Image 4' },
    { id: 5, src: 'src/assets/images/testimonials/SmartSoftwareServices.png', alt: 'Testimonial Image 5' },
    { id: 6, src: 'src/assets/images/testimonials/TechMahindra.png', alt: 'Testimonial Image 6' },
    { id: 7, src: 'src/assets/images/testimonials/Wipro.png', alt: 'Testimonial Image 7' },
    { id: 8, src: 'src/assets/images/testimonials/Newage.png', alt: 'Testimonial Image 8' },
];

export default function Testimonials() {
    return (
        <section className="container-fluid testimonial py-5 my-2">  {/* reduced vertical margin */}
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mx-auto pb-5 max-w-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h5 className="text-primary text-lg font-semibold mb-5">Our Testimonial</h5>
                    <h1 className="text-3xl font-bold">Our Associate Partners</h1>
                </motion.div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={true}
                    freeMode={true}
                    freeModeSticky={false}  // <-- Correctly on Swiper
                    speed={15000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 15 },
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                        1280: { slidesPerView: 6, spaceBetween: 30 },
                    }}
                >
                    {testimonials.map(({ id, src, alt }) => (
                        <SwiperSlide key={id}>
                            <motion.div
                                className="testimonial-item rounded-lg p-3 bg-white shadow-md flex items-center justify-center border border-gray-300"
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
                            >
                                <img
                                    src={src}
                                    alt={alt}
                                    className="img-fluid max-h-20 object-contain mx-auto"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
