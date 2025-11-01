import { useEffect, useState } from "react";

export default function InvestmentForm({ onInvestmentFormUpdated }) {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(inputIdentifier, newValue) {
    setInvestmentDetails((prevInvesmentDetails) => {
      return {
        ...prevInvesmentDetails,
        [inputIdentifier]: newValue,
      };
    });
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
            <input
              type="number"
              onChange={(event) =>
                handleChange("initialInvestment", +event.target.value)
              }
            />
          </div>

          <div>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(event) =>
                handleChange("annualInvestment", +event.target.value)
              }
            />
          </div>
        </div>

        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(event) =>
                handleChange("expectedReturn", +event.target.value)
              }
            />
          </div>

          <div>
            <label>Duration</label>
            <input
              type="number"
              onChange={(event) =>
                handleChange("duration", +event.target.value)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
