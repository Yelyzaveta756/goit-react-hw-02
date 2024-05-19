import css from "./Options.module.css"

export default function Options ({ onClick, onReset, showReset}) {

    return (
        <div className={css.feedback}>
            <button onClick={()=> onClick("good")} className={css.btn}>Good</button>
            <button onClick={()=> onClick("neutral")} className={css.btn}>Neutral</button>
            <button onClick={()=> onClick("bad")} className={css.btn}>Bad</button>
            <button onClick={onReset} className={`${css.resetbtn} ${showReset ? css.visible : css.hidden}`}>Reset</button>
        </div>
    )

}