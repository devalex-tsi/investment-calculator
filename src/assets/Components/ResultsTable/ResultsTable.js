import ResultsTableBody from "./ResultsTableBody";

const ResultsTable = props => {
    return (
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>

            <ResultsTableBody data={props.data} initialInvestment={props.initialInvestment}/>
        </table>
    )
}

export default ResultsTable