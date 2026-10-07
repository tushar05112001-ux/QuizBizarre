import React from "react";

function Contact() {
  return (
    <div>
      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Contact Us</h1>

          <p className="lead text-muted">
            Have a question, suggestion, or found a problem?
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button className="btn btn-primary w-100">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
