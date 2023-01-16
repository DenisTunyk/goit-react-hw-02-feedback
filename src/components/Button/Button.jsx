import css from "./Button.module.css"


export const Button = ({name}) => {
    return (
        <button type="button" className={css.button}>{ name }</button>
    )
}