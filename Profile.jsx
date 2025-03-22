import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

import "./Profile.css";



const Profile = ({ user, donationsGiven, fundsRaised, topDonorIn, donationCategories, fundsCategories }) => {
  return (
    <div className="profile-container">
      {/* Profile Card Section */}
      <div className="profile-card">
        <img
          src={user.profilePic}
          alt="User Profile"
          className="profile-image"
        />
        <h2 className="profile-name">{user.name}</h2>
      </div>

      {/* Main Content Section with Flexbox */}
      <div className="profile-content">
        {/* Top Donor Section */}
        <div className="profile-section top-donor-section">
          <h3 className="top-donor-title">
            <i className="fas fa-award"></i> You're a top donor in
          </h3>
          <span className="badge">{topDonorIn}</span>
        </div>

        {/* Funds Raised Section */}
        <div className="profile-section">
       
       < h3 className="section-title">
  <FontAwesomeIcon icon={faFileInvoiceDollar} /> Funds Raised
</h3>
          {fundsCategories.map((category, index) => (
            <div key={index} className="fund-category">
              <p className="category-label">{category.label}</p>
              <div className="progress-bar-containerp">
                <div
                  className="progress-barp"
                  style={{ width: `${category.progress}%` }}
                ></div>
              </div>
              <p className="progress-percentagep">{category.progressp}%</p>
            </div>
          ))}
        </div>

        {/* Donations Section */}
        <div className="profile-section">
       
        <h3 className="section-title">
  <FontAwesomeIcon icon={faHandHoldingDollar} /> Your Donations
</h3>
          {donationCategories.map((category, index) => (
            <div key={index} className="donation-category">
              <p className="category-label">{category.label}</p>
              <div className="progress-bar-containerp">
                <div
                  className="progress-barp"
                  style={{ width: `${category.progressp}%` }}
                ></div>
              </div>
              <p className="progress-percentagep">{category.progressp}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
