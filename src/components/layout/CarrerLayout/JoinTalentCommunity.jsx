import React from "react";
import joinImage from "../../../assets/images/JoinTalentCommunity.jpeg"; // Adjust path accordingly
import "./JoinTalentCommunity.css";

const JoinTalentCommunity = () => {
    return (
        <section className="jointalentCommunity">
            <div className="container">
                <div className="row flex-row align-items-center">
                    {/* Left side: Image */}
                    <div className="col-sm-4">
                        <img
                            src={joinImage}
                            alt="Join Talent Community"
                            className="img-fluid join-image"
                        />
                    </div>

                    {/* Right side: Content + Button */}
                    <div className="col-sm-8 content-section">
                        <h1 className="commonTitle__title" data-aos="fade-up">
                            Join Our Talent Community<span className="theme-color">.</span>
                        </h1>
                        <div className="description-text">
                            <p>
                                Stay connected by joining our network! Enter your e-mail and tell us a bit about yourself,
                                and we'll keep you informed about upcoming events, exclusive workshops, career opportunities,
                                and networking sessions tailored to your interests.
                            </p>
                            <p>
                                Be the first to hear about industry insights, expert talks, and resources designed to help you grow professionally and personally.
                                Join us to build meaningful connections and unlock your potential with a community that supports your journey.
                            </p>
                        </div>
                        <button
                            className="btn btn-danger rounded-pill px-5 py-3"
                            onClick={() => (window.location.href = "mailto:hr@jditbs.com")}
                        >
                            Join us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinTalentCommunity;
