import { formatter } from "../util/investment";

export default function InvestmentResults({
  investmentResults,
  initialInvestment,
}) {
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {investmentResults.map((row, index) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;

            return (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(initialInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
