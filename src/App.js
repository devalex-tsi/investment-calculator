import InvestmentForm from "./assets/Components/InvestmentForm/InvestmentForm"
import Header from "./assets/Components/Header/Header"
import ResultsTable from "./assets/Components/ResultsTable/ResultsTable"
import {useState} from "react"

function App() {
    const [userInput, setUserInput] = useState(null)

    const onCalculateBtnClick = (userInput) => {
        setUserInput(userInput)
    }
    const cleanupTableBody = () => {
        setUserInput(null)
    }

    const yearlyData = []
    if (userInput) {
        let currentSavings = +userInput['current-savings'];
        const yearlyContribution = +userInput['yearly-contribution']
        const expectedReturn = +userInput['expected-return'] / 100
        const duration = +userInput.duration

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn
            currentSavings += yearlyInterest + yearlyContribution
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            })
        }
    }

    return (
        <div>
            <Header/>

            <InvestmentForm onCalculateBtnClick={onCalculateBtnClick}
                            onResetBtnClick={cleanupTableBody}/>

            {userInput ? (<ResultsTable
                    data={yearlyData}
                    initialInvestment={userInput['current-savings']}/>
            ) : (
                <p>Fill the form with your data</p>
            )}

        </div>
    );
}

export default App;
