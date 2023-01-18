
import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.containerButton}>
            {
                options.map((item) => 
                    <button className={css.button} key={item} type="button" onClick={() => onLeaveFeedback(item)}>{ item }</button>
                )
            }
        </div>
    )
}


FeedbackOptions.propTypes = {
    onGood: PropTypes.func,
    onNeutral: PropTypes.func,
    onBad: PropTypes.func
}