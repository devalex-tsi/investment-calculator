import ResultsTableBody from "./ResultsTableBody";
import classes from './ResultTable.module.css'

const ResultsTable = props => {
    return (
        <table className={classes.result}>
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