import React from "react";
import TrueEmpactImg from "../../../assets/images/hero/TrueEmpact.jpeg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./TrueEmpact.css";

const TrueEmpact = () => {
  const handleJoinClick = () => {
    window.location.href = "mailto:hr@jditbs.com";
  };

  return (
    <section className="trueEmpact">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="commonTitle text-center text-xl-left">
              <h1 className="commonTitle__title">
                <strong>
                  A Hyperlearning workforce and <br /> culture of true-gen impact
                </strong>
              </h1>
            </div>
          </div>
        </div>

        <div className="row content-row">
          <div className="col-xl-4">
            <img
              className="impact-img"
              src={TrueEmpactImg}
              alt="Impact"
            />
          </div>
          <div className="col-xl-8">
            <p>
              By now, professionals, particularly in the technology sector, know that
              future-proofing our learning and skills is crucial – but learning as we know
              it will not suffice. Disruptors of nature of work have been delivered by digital
              innovations, changing digital-native needs, and a young workforce which only finds
              true professional joy from impactful work.
            </p>
            <p>
              We connect your career goals to strategic skills that are a win-win for each and
              everyone in the JDIT family. Our Hyperlearning workplace is grounded upon four
              principles –
            </p>
            <ul>
              <li>free spirit and emotional positivity</li>
              <li>agile self-determination</li>
              <li>psychological and physical safety</li>
              <li>trust, transparency and open collaboration</li>
            </ul>
            <p>
              We leverage career-oriented skilling models and optimize our collective intelligence
              aided with technology for continuous learning, unlearning and relearning at a rapid
              pace and scale.
            </p>
            <button className="join-btn" onClick={handleJoinClick}>
              Join us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrueEmpact;
