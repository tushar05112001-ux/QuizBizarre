import React from "react";

function About() {
  return (
    <div>
      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">About QuizAI</h1>

          <p className="lead text-muted">
            Making learning more interactive with AI.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">What is QuizAI?</h2>

              <p>
                QuizAI is an AI-powered quiz generator that can create
                quizzes on almost any topic.
              </p>

              <p>
                Simply enter a topic, and QuizAI uses Google Gemini AI
                to generate questions and answer choices for you.
              </p>

              <p>
                Whether you're studying, preparing for an exam, learning
                something new, or simply testing your knowledge, QuizAI
                makes it easy to create a quiz whenever you need one.
              </p>

              <div className="alert alert-info mt-4">
                <strong>Powered by Google Gemini AI</strong>
                <br />
                AI-generated content can sometimes contain mistakes.
                Always verify important information from reliable sources.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
