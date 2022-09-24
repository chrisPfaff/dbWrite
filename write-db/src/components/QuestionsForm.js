import "../styles/questionforms.scss";

import { useEffect, useState } from "react";

import ProgressBar from "./ProgressBar";
import QuestionsSlide from "./QuestionsSlide";
import React from "react";
import Results from "./Results";

function QuestionsForm() {
  const [answers, setAnswers] = useState([]);
  const [progBarLength, setProgBarLength] = useState(0);

  function handleAnswers(contact, answerArr) {
    setAnswers([contact, answerArr]);
  }
  useEffect(() => {}, [answers]);

  return (
    <>
      {answers.length !== 0 ? (
        <Results answers={answers} />
      ) : (
        <section className="questions-form">
          <ProgressBar progress={progBarLength} />
          <QuestionsSlide
            handleAnswers={handleAnswers}
            setProgBarLength={setProgBarLength}
          />
        </section>
      )}
    </>
  );
}

export default QuestionsForm;
