import React from "react";
import mission from "../images/mission.jpg";
import vision from "../images/vision.avif";

export default function About() {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">Welcome to Daily News</h1>
        <p className="lead text-muted">
          Your one-stop platform for unbiased, real-time news updates from
          around the globe.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src={mission}
              alt="Mission"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="fw-bold">Our Mission</h2>
            <p>
              At <strong>Daily News</strong>, we strive to be more than just a
              news platform. Our mission is to empower people with information
              that matters. Whether it's global politics, entertainment, sports,
              or technology, we ensure that every story we deliver is accurate,
              timely, and relevant to you.
            </p>
            <p>
              In an age of misinformation, our commitment is to maintain
              journalistic integrity while fostering an informed community of
              readers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Why Choose Daily News?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-clock-history display-4 text-success"></i>
              <h4 className="fw-bold mt-3">Real-Time Updates</h4>
              <p>
                Get the latest news as it happens, keeping you informed 24/7
                with instant updates.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-journal-check display-4 text-success"></i>
              <h4 className="fw-bold mt-3">Trusted Sources</h4>
              <p>
                Our content is curated from verified and reliable sources,
                ensuring the accuracy of every story.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-layers-fill display-4 text-success"></i>
              <h4 className="fw-bold mt-3">User-Friendly Design</h4>
              <p>
                Navigate easily through our modern interface, designed for a
                seamless news reading experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={vision}
              alt="Vision"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Our Vision</h2>
            <p>
              We envision a world where access to accurate information bridges
              gaps, fosters understanding, and promotes a more informed society.
              With Daily News, we aim to create a community that values
              knowledge and engages with current events critically and
              constructively.
            </p>
            <blockquote className="blockquote">
              <p className="mb-0">
                "An informed citizenry is the bulwark of democracy."
              </p>
              <footer className="blockquote-footer mt-1">
                Thomas Jefferson
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="fw-bold">Be Part of Our Journey</h2>
        <p className="lead">
          Subscribe to our newsletter and join a growing community of readers
          who value truth, transparency, and timely news.
        </p>
        <a href="/subscribe" className="btn btn-success btn-lg">
          Subscribe Now
        </a>
      </section>
    </div>
  );
}
