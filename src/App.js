// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [question, setQuestion] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);

  const checkAns = (userSelected, correctAns) => {
    if (userSelected == correctAns) {
      setMarks(marks + 1);
    }

    if (indexNumber + 1 == question.length) {
      setResult(true);
    }
    setIndexNumber(indexNumber + 1);
  };

  return (
    <div>
      {result ? (
        <h1>YOUR MARK IS {marks}</h1>
      ) : (
        <div>
          <h1>{question[indexNumber].question}</h1>
          <hr />

          {question[indexNumber].options.map((e, i) => {
            return (
              <div key={i}>
                <button
                  onClick={() => checkAns(e, question[indexNumber].answer)}
                >
                  {e}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
