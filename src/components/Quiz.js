import React, { useState } from 'react';
import './Quiz.css'; 

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "What year did World War I begin?",
    options: ["1914", "1918", "1939", "1941"],
    answer: "1914"
  },
  {
    question: "Who is known as the father of modern physics?",
    options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
    answer: "Albert Einstein"
  },
  {
    question: "Which country is the largest by land area?",
    options: ["Russia", "Canada", "China", "United States"],
    answer: "Russia"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "G", "Go"],
    answer: "Au"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Denali"],
    answer: "Mount Everest"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    const isCorrect = questions[currentQuestion].answer === selectedAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div className="result">
          <h2>Quiz Result</h2>
          <p>Your score: {score} out of {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
