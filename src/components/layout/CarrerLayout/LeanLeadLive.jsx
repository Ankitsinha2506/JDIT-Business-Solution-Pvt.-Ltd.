import React, { useEffect } from "react";
import Aos from "aos";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./LeanLeadLive.css"; // We'll make this for styling

const LeanLeadLive = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <section className="leanLeadLive">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-xl-4">
                        <div className="leanLeadLive_box learn_box">
                            <div className="commonTitle text-center text-xl-left">
                                <h2 className="commonTitle__title" data-aos="fade-up">Learn</h2>
                                <h6 className="font-md">Push the boundaries of your horizon everyday</h6>
                                <ul>
                                    <li>
                                        <strong>Purposeful career learning curve</strong> Capitalize on your
                                        opportunities with a slew of upskilling and niche technical programs,
                                        and apply them at your work
                                    </li>
                                    <li>
                                        <strong>Empowered intrapreneurship</strong> Feel empowered to make a
                                        difference in any industry and have a clear voice in the organization
                                    </li>
                                    <li>
                                        <strong>The power of collaboration</strong> We celebrate weaknesses at
                                        JDIT as they are superpowers waiting to manifest themselves
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="leanLeadLive_box lead_box">
                            <div className="commonTitle text-center text-xl-left">
                                <h2 className="commonTitle__title" data-aos="fade-up">Lead</h2>
                                <h6 className="font-md">Be the outlier out to change the world</h6>
                                <ul>
                                    <li>
                                        <strong>Inclusive diversity</strong> Regardless of who you were, you
                                        will thrive among outliers who come with a diverse set of skills and
                                        ideas
                                    </li>
                                    <li>
                                        <strong>Equal opportunity leadership programs</strong> Women are
                                        actively empowered as leaders, regardless of being a fresher, mother or
                                        a veteran returning to work
                                    </li>
                                    <li>
                                        <strong>Collective and strategic social change</strong> The spirit of
                                        doing good in meaningful ways is woven into our culture through the JDIT
                                        Social Welfare Foundation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="leanLeadLive_box liveLeap_box">
                            <div className="commonTitle text-center text-xl-left">
                                <h2 className="commonTitle__title" data-aos="fade-up">Live/Leap</h2>
                                <h6 className="font-md">
                                    Live and breathe technology with its impact spanning generations
                                </h6>
                                <ul>
                                    <li>
                                        <strong>Question everything</strong> You are constantly challenged to
                                        think outside the box, so that you can have the freedom to succeed
                                    </li>
                                    <li>
                                        <strong>Real-world problem-solving</strong> You will always find an
                                        inspiration to build something new, as we see every little piece of
                                        technology that can solve the biggest problems in the real-world
                                    </li>
                                    <li>
                                        <strong>True-gen impact</strong> From keeping the planet green, ensuring
                                        medicines reach the furthest corners of the world to assisting others in
                                        reaching the pinnacle of success, you will leave an indelible mark in
                                        the world
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeanLeadLive;
