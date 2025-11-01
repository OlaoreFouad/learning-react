import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investmentResults, setInvestmentResults] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState(0);

  function onInvestmentFormUpdated({
    annualInvestment,
    initialInvestment,
    expectedReturn,
    duration,
  }) {
    setInitialInvestment(initialInvestment);
    const results = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });

    setInvestmentResults(results);
  }

  return (
    <>
      <Header />
      <InvestmentForm onInvestmentFormUpdated={onInvestmentFormUpdated} />
      <InvestmentResults
        investmentResults={investmentResults}
        initialInvestment={initialInvestment}
      />
    </>
  );
}

export default App;
