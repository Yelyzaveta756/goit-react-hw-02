import Options from "./components/Options/Options.jsx"
import Feedback from './components/Feedback/Feedback.jsx';
import { useState, useEffect } from "react";

import css from "./components/Feedback/Feedback.module.css"


export default function App () {

const [options, setOptions] = useState(()=> {
  const saveOptions = localStorage.getItem("saved-options");
  return saveOptions !== null ? JSON.parse(saveOptions) : { good: 0, neutral: 0, bad: 0 };
})

const [hasFeedback, setHasFeedback] = useState(false);

useEffect(() => {
  window.localStorage.setItem("saved-options", JSON.stringify(options));
  setHasFeedback(options.good > 0 || options.neutral > 0 || options.bad > 0);
}, [options])

const updateFeedback = feedbackType => {
  setOptions(prevFeedback => ({
    ...prevFeedback,
    [feedbackType]: prevFeedback[feedbackType] + 1
  }));
};

const resetFeedback = () => {
  setOptions({
    good: 0,
    neutral: 0,
    bad: 0,
  });
}


const totalFeedback = options.good + options.neutral + options.bad;

const positiveFeedback = totalFeedback > 0 ? Math.round((options.good / totalFeedback) * 100) : 0;



    return (
        <>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
        <Options 
        onClick={updateFeedback}
        onReset={resetFeedback}
        showReset={hasFeedback}
        />
         {totalFeedback == 0 ? ( 
         <p>No feedback yet</p>
        ) : ( <Feedback 
          goodFeedback={options.good}
          badFeedback={options.bad}
          neutralFeedback={options.neutral}
          totalValue={totalFeedback}
          positiveValue={positiveFeedback}
          />
        )}
        </>  
      )
}