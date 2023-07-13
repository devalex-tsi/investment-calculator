import {useState} from "react";

const initUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10
}

const InvestmentForm = props => {
    const [userInput, setUserInput] = useState(initUserInput)

    const resetBtnHandler = () => {
        setUserInput(initUserInput)
        props.onResetBtnClick()
    }
    const onCalculateBtnClick = event => {
        event.preventDefault()
        props.onCalculateBtnClick(userInput)
    }

    const inputsChangeHandler = (input, value) => {
        setUserInput((prevProps) => {
            return {
                ...prevProps,
                [input]: value
            }
        })
    }

    return (
        <form className="form" onSubmit={onCalculateBtnClick}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number"
                           id="current-savings"
                           onChange={event => inputsChangeHandler("current-savings", event.target.value)}
                           value={userInput["current-savings"]}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution"
                           onChange={event => inputsChangeHandler("yearly-contribution", event.target.value)}
                           value={userInput["yearly-contribution"]}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return"
                           onChange={event => inputsChangeHandler("expected-return", event.target.value)}
                           value={userInput["expected-return"]}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration"
                           onChange={event => inputsChangeHandler("duration", event.target.value)}
                           value={userInput.duration}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetBtnHandler}
                >
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>)
}

export default InvestmentForm