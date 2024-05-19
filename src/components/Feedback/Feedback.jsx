import css from "./Feedback.module.css"

export default function Feedback ({goodFeedback, badFeedback, neutralFeedback, totalValue, positiveValue}) {
   return (
    <ul>
        <li>Good: {goodFeedback} </li>
        <li>Neutral: {neutralFeedback}</li>
        <li>Bad: {badFeedback}</li>
        <li>Total: {totalValue}</li>
        <li>Positive: {positiveValue}%</li>
    </ul>
   )

}