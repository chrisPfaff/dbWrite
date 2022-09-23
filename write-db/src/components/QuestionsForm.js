import "../styles/questionforms.scss";

import ProgressBar from "./ProgressBar";
import QuestionsSlide from "./QuestionsSlide";
import React from "react";
import { useState } from "react";

function QuestionsForm() {
  const [answers, setAnswers] = useState([]);
  const [progBarLength, setProgBarLength] = useState(0);

  function handleAnswers(contact, answerArr) {
    setAnswers([contact, answerArr]);
    console.log(answers);
  }
  return (
    <section className="questions-form">
      <ProgressBar progress={progBarLength} />
      <QuestionsSlide
        handleAnswers={handleAnswers}
        setProgBarLength={setProgBarLength}
      />
    </section>
  );
}

export default QuestionsForm;
