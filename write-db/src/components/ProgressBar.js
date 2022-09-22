import "../styles/progressbar.scss";

import React from "react";

function ProgressBar({ progress }) {
  return <span className={`progress-bar length${progress}`}></span>;
}

export default ProgressBar;
