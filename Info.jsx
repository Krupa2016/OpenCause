


import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Import required elements
import { useLocation } from "react-router-dom"; // Import useLocation
import { Link } from "react-router-dom";


// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

export const Info = () => {
  const location = useLocation(); // Get location state
  const { title, description, donateText, chartData, options, imageSrc, altText } = location.state || {}; // Destructure data from state

  return (
    <>
     <div className="info-container">
      {/* Text Content */}
      <div className="info-text-content">
        <h1 className="info-heading">{title}</h1>
        <p className="info-description">{description}</p>
        <div className="info-button-group">
          <button className="info-donate-button">{donateText}</button>
          <Link to = "/start-project">
          <button className="info-fundraiser-button">Start a fire relief fundraiser</button>
          </Link>
        </div>

        {/* Chart */}
        <div className="info-chart-container">
          <Doughnut className="info-graph" data={chartData} options={options} />
        </div>
      </div>

      {/* Image */}
      <div className="info-image-container">
        <img src={imageSrc} alt={altText} className="info-image" />
      </div>
    </div>

 
    </>
   

    
  );
};

export default Info;
