import React from "react";

const Quiz = ({
  question,
  selectedOption,
  questionIndex,
  handlePreviousQuestion,
  handleNextQuestion,
  handleAnswers
}) => {

	//console.log(question);
  return (
    <div className="container py-4">
  <div className="card shadow-sm">
    <div className="card-body">

      <h2 className="card-title mb-4">
        Question {questionIndex + 1}: {question.question}
      </h2>

      <div className="mb-4">
        {question.options.map((option, index) => (
          <div className="form-check mb-3" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={`question-${questionIndex}`}
              id={`question-${questionIndex}-option-${index}`}
              value={index}
              checked={selectedOption === index}
              onChange={() => handleAnswers(index)}
            />

            <label
              className="form-check-label"
              htmlFor={`question-${questionIndex}-option-${index}`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary"
          onClick={handlePreviousQuestion}
        >
          Previous
        </button>

        <button
          className="btn btn-primary"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      </div>

    </div>
  </div>
</div>
  );
};

export default Quiz;
