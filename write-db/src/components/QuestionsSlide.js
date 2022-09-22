import "../styles/questionslide.scss";

import { useEffect, useState } from "react";

import QueryForm from "./QueryForm";
import React from "react";
import questions from "../questions/questions.json";

function QuestionsSlide({ handleAnswers, setProgBarLength }) {
  const [holdingData, setHoldingData] = useState({});
  const [target, setTarget] = useState(0);

  const handleNextClick = () => {
    setTarget((prev) => (prev = prev + 1));
    setProgBarLength((prev) => (prev = prev + 1));
  };

  const createQuestion = () => {
    return questions.map((item, index) => {
      if (index === 0) {
        return (
          <div className="active card" key={item._id}>
            <h2>{item.question}</h2>
            <div className="answers">
              <label htmlFor="yes">Yes</label>
              <input type="radio" name={`choice${item._id}`} id="yes" />
              <label htmlFor="no">no</label>
              <input type="radio" name={`choice${item._id}`} id="no" />
              <label htmlFor="maybe">Maybe</label>
              <input type="radio" name={`choice${item._id}`} id="maybe" />
            </div>
            <button onClick={handleNextClick}>Next</button>
          </div>
        );
      } else {
        return (
          <div className="card" key={item._id}>
            <h2>{item.question}</h2>
            <div className="answers">
              <label htmlFor="yes">Yes</label>
              <input type="radio" name={`choice${item._id}`} id="yes" />
              <label htmlFor="no">no</label>
              <input type="radio" name={`choice${item._id}`} id="no" />
              <label htmlFor="maybe">Maybe</label>
              <input type="radio" name={`choice${item._id}`} id="maybe" />
            </div>
            <button onClick={handleNextClick}>Next</button>
          </div>
        );
      }
    });
  };

  return (
    <div className="questions-slide">
      {target === 5 ? (
        <QueryForm handleAnswers={handleAnswers} />
      ) : (
        createQuestion()
      )}
    </div>
  );
}

export default QuestionsSlide;
