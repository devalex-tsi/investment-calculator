const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const ResultsTableBody = props => {
    const yearlyData = props.data
    const initialInvestment = props.initialInvestment
    return (
        <tbody>
        {
            yearlyData.map((item, index) => {
                const totalInterestGained = item.savingsEndOfYear - initialInvestment - item.yearlyContribution * item.year
                const totalInvestmentCapital = +initialInvestment + item.yearlyContribution * item.year

                return <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.savingsEndOfYear)}</td>
                    <td>{formatter.format(item.yearlyInterest)}</td>
                    <td>{formatter.format(totalInterestGained)}</td>
                    <td>{formatter.format(totalInvestmentCapital)}</td>
                </tr>
            })
        }
        </tbody>)
}
export default ResultsTableBody