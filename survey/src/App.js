import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Question 1",
      answerOptions: [
        { answerText: "Option 1", isCorrect: false },
        { answerText: "Option 2", isCorrect: false },
        { answerText: "Option 3", isCorrect: true },
        { answerText: "Option 4", isCorrect: false },
      ],
    },
    {
      questionText: "Question 1",
      answerOptions: [
        { answerText: "Option 1", isCorrect: false },
        { answerText: "Option 2", isCorrect: true },
        { answerText: "Option 3", isCorrect: false },
        { answerText: "Option 4", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
