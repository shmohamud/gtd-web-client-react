import React from "react";

const Step = props => {
  const { text, completed } = props;
  return (
    <div>
      <h3>Text: {text}</h3>
      <li>Completed: {completed.toString()}</li>
    </div>
  );
};

export default Step;

