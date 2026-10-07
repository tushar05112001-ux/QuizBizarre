import React from "react";

function Home() {
  return (
    <div>
      <section className="bg-light text-center py-5">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">
            Turn Any Topic Into a Quiz
          </h1>

          <p className="lead text-muted mt-3">
            Enter any topic and let AI create a quiz for you in seconds.
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            Create a Quiz
          </button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why QuizAI?</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center p-4">
                <h4>Any Topic</h4>
                <p className="text-muted">
                  Create quizzes about almost anything you want to learn.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-4">
                <h4>AI Powered</h4>
                <p className="text-muted">
                  Questions are generated using Google Gemini AI.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-4">
                <h4>Learn & Test</h4>
                <p className="text-muted">
                  Test your knowledge and discover what you need to improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
