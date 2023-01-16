
import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"


export const FeedbackOptions = ({onGood, onNeutral, onBad}) => {
    return (
            <div className={css.containerButton}>
                <button className={css.button} type="button" onClick={onGood}> Good</button>
                <button className={css.button} type="button" onClick={onNeutral}> Neutral </button>
                <button className={css.button} type="button" onClick={onBad}> Bad </button>
            </div>
    )
}


FeedbackOptions.propTypes = {
    onGood: PropTypes.func,
    onNeutral: PropTypes.func,
    onBad: PropTypes.func
}