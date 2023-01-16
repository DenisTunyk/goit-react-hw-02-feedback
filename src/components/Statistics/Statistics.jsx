import { Title } from "components/Title/Title"
import css from "./Statistics.module.css"


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul>
            <li className={css.list}>Good: <span>{ good }</span></li>
            <li className={css.list}>Netural: <span>{ neutral }</span></li>
            <li className={css.list}>Bad: <span>{bad}</span></li>
            <li className={css.list}>Total: <span>{total()}</span></li>
            <li className={css.list}>Positive feedback: <span>{ positivePercentage() }%</span></li>
        </ul>
    )
}