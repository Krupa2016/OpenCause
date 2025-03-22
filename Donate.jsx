import React, { useState } from "react";


const Donate = () => {
  const [donation, setDonation] = useState(0);
  const [anonymous, setAnonymous] = useState(false);

  const handleDonationChange = (e) => {
    setDonation(parseFloat(e.target.value) || 0);
  };

  const handleAnonymousChange = () => {
    setAnonymous(!anonymous);
  };

  return (
    <div className="donate-container">
      <form className="donate-form">
        <h2>Make a Donation</h2>

        {/* Input for Donation Amount */}
        <label htmlFor="donation-amount">Enter the amount you want to donate (€):</label>
        <input
          type="number"
          id="donation-amount"
          name="donation-amount"
          value={donation}
          onChange={handleDonationChange}
          placeholder="Enter amount"
          required
        />

        {/* Anonymous Donation Option */}
        <div className="anonymous-option">
          <label htmlFor="anonymous">
            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked={anonymous}
              onChange={handleAnonymousChange}
            />
            Donate Anonymously
          </label>
        </div>

        {/* Donation Summary */}
        <div className="donation-summary">
          <h3>Summary of Your Donation</h3>
          <p>Your Donation: €{donation.toFixed(2)}</p>
          <p className="total-due">Total Due Today: <strong>€{donation.toFixed(2)}</strong></p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="donate-button">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default Donate;
