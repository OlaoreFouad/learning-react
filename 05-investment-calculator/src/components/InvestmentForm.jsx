import { useEffect, useState } from "react";

export default function InvestmentForm({ onInvestmentFormUpdated }) {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInitialInvestmentChange(event) {
    setInvestmentDetails((prevInvesmentDetails) => ({
      ...prevInvesmentDetails,
      initialInvestment: +event.target.value,
    }));
  }

  function handleAnnualInvestmentChange(event) {
    setInvestmentDetails((prevInvesmentDetails) => ({
      ...prevInvesmentDetails,
      annualInvestment: +event.target.value,
    }));
  }

  function handleExpectedReturnChange(event) {
    setInvestmentDetails((prevInvesmentDetails) => ({
      ...prevInvesmentDetails,
      expectedReturn: +event.target.value,
    }));
  }

  function handleDurationChange(event) {
    setInvestmentDetails((prevInvesmentDetails) => ({
      ...prevInvesmentDetails,
      duration: +event.target.value,
    }));
  }

  useEffect(() => {
    onInvestmentFormUpdated(investmentDetails);
  }, [investmentDetails]);

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input type="number" onChange={handleInitialInvestmentChange} />
          </div>

          <div>
            <label>Annual Investment</label>
            <input type="number" onChange={handleAnnualInvestmentChange} />
          </div>
        </div>

        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input type="number" onChange={handleExpectedReturnChange} />
          </div>

          <div>
            <label>Duration</label>
            <input type="number" onChange={handleDurationChange} />
          </div>
        </div>
      </div>
    </>
  );
}
