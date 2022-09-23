import "../styles/questionslide.scss";

import QueryForm from "./QueryForm";
import React from "react";
import questions from "../questions/questions.json";
import { useState } from "react";

function QuestionsSlide({ handleAnswers, setProgBarLength }) {
  const [holdingData, setHoldingData] = useState([]);
  const [target, setTarget] = useState(null);
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleNextClick = () => {
    setTarget((prev) => (prev = prev + 1));
    setProgBarLength((prev) => (prev = prev + 1));
    setIndexes((prevState) => ({
      previousIndex: prevState.currentIndex,
      currentIndex: prevState.currentIndex + 1,
      nextIndex:
        prevState.currentIndex + 2 === questions.length
          ? 0
          : prevState.currentIndex + 2,
    }));
  };

  const handleChange = (question, event) => {
    const value = { value: event.target.id, question };
    setHoldingData((prev) => {
      return [...prev, value];
    });
  };

  const determineClasses = (indexes, cardIndex) => {
    if (indexes.currentIndex === cardIndex) {
      return "active";
    } else if (indexes.nextIndex === cardIndex) {
      return "next";
    } else if (indexes.previousIndex === cardIndex) {
      return "prev";
    }
    return "inactive";
  };

  const createQuestion = () => {
    return questions.map((item, index) => {
      return (
        <div
          className={`card ${determineClasses(indexes, index)}`}
          key={item._id}
        >
          <h2>{item.question}</h2>
          <div className="answers">
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              onChange={(e) => {
                handleChange(item.question, e);
              }}
              name={`choice${item._id}`}
              id="yes"
            />
            <label htmlFor="no">no</label>
            <input
              type="radio"
              onChange={(e) => {
                handleChange(item.question, e);
              }}
              name={`choice${item._id}`}
              id="no"
            />
            <label htmlFor="maybe">Maybe</label>
            <input
              type="radio"
              onChange={(e) => {
                handleChange(item.question, e);
              }}
              name={`choice${item._id}`}
              id="maybe"
            />
          </div>
          <button onClick={handleNextClick}>Next</button>
        </div>
      );
    });
  };

  return (
    <div className="questions-slide">
      {target === 5 ? (
        <QueryForm handleAnswers={handleAnswers} holdingData={holdingData} />
      ) : (
        createQuestion()
      )}
    </div>
  );
}

export default QuestionsSlide;
