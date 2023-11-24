'use client';
import React, { useState } from 'react';
import { quiz } from './data.js';

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (

  <div className="container overflow-x-hidden items-center px-10  ml-5 justify-center">
    <h1 className="text-white ">Quiz Page</h1>
    <div>
    <h2>
      Question: {activeQuestion + 1}
      <span>/{questions.length}</span>
    </h2>
  </div>
  <div>
    {!showResult ? (
      <div className="quiz-container list-none
       bg-purple-200 p-4 mt-2 rounded">
        <h3 className="text-black text-2xl pb-4 text-center">{questions[activeQuestion].question}</h3>
        {answers.map((answer, idx) => (
          <li
            key={idx}
            onClick={() => onAnswerSelected(answer, idx)}
            className={`cursor-pointer my-9 py-2 px-4 text-black border border-white rounded-lg ${selectedAnswerIndex === idx ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}
          >
            <span>{answer}</span>
          </li>
        ))}
        {checked ? (
          <button
            onClick={nextQuestion}
            className="btn bg-orange-500 text-white py-4 px-2 w-full mt-5 mb-5 rounded cursor-pointer animate-pulse"
          >
            {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            disabled
            className="btn-disabled bg-gray-500 py-4 px-2 w-full mt-5 mb-5 rounded cursor-not-allowed"
          >
            {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
          </button>
        )}
      </div>
    ) : (
      <div className="quiz-container text-xl py-9 bg-purple-200 mt-8 rounded  flex flex-col items-center justify-center">
        <h2 className="text-black text-3xl pb-1">Results</h2>
        <hr />
        <h2 className="text-black text-3xl pb-2">Overall {(result.score / 50) * 100}%</h2>
        <p>
          Total Questions: <span>{questions.length}</span>
        </p>
        <p>
          Total Score: <span>{result.score}</span>
        </p>
        <p>
          Correct Answers: <span>{result.correctAnswers}</span>
        </p>
        <p className=' pb-2'>
          Wrong Answers: <span>{result.wrongAnswers}</span>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn bg-orange-500 text-white py-4 px-20 rounded cursor-pointer pt-3"
        >
          Restart
        </button>
      </div>
    )}
  </div>
</div>

  );
};

export default page;