import Options from "./components/Options/Options.jsx"
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx'
import Description from './components/Description/Description.jsx'
import { useState, useEffect } from "react";

export default function App () {

const [options, setOptions] = useState(()=> {
  const saveOptions = localStorage.getItem("saved-options");
  return saveOptions !== null ? JSON.parse(saveOptions) : { good: 0, neutral: 0, bad: 0 };
})

useEffect(() => {
  window.localStorage.setItem("saved-options", JSON.stringify(options));
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

const showReset = totalFeedback > 0;

    return (
        <>
        <Description />
        <Options 
        onClick={updateFeedback}
        onReset={resetFeedback}
        showReset={showReset}
        />
         {totalFeedback == 0 ? ( 
         <Notification />
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