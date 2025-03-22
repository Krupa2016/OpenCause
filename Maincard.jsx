



import React from "react";
import { useNavigate } from "react-router-dom";

const LeftPanelCard = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
  return (
    <div className="left-panel-card" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-donations">{donations} donations</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

const RightPanelCard = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
  return (
    <div className="right-panel-card" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-donations">{donations} donations</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

const LeftPanel = ({ card, onClick }) => (
  <div className="left-panel">
    <LeftPanelCard {...card} onClick={onClick} />
  </div>
);

const RightPanel = ({ cards, onClick }) => (
  <div className="right-panel">
    {cards.map((card, index) => (
      <RightPanelCard key={index} {...card} onClick={onClick} />
    ))}
  </div>
);

const Maincard = () => {
  const navigate = useNavigate();

  const imagePaths = [
    "https://images.pexels.com/photos/9037205/pexels-photo-9037205.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11805519/pexels-photo-11805519.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/12085633/pexels-photo-12085633.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const cards = [
    {
      id: 1,
      image: imagePaths[0],
      title: "Clean The Beaches",
      donations: "3.7K",
      amountRaised: 61045,
      progress: 90,
      description:
        "A beach clean is a community or individual effort to remove litter, debris, and pollution from beaches and shorelines.",
    },
    {
      id: 2,
      image: imagePaths[1],
      title: "Disaster Relief",
      donations: "2.9K",
      amountRaised: 87634,
      progress: 95,
      description:
        "Providing immediate aid to individuals and communities affected by natural disasters or emergencies.",
    },
    {
      id: 3,
      image: imagePaths[2],
      title: "Support Ali Rebuilding a Life Shattered by War",
      donations: "1.6K",
      amountRaised: 64769,
      progress: 70,
      description: "Aid Ali in rebuilding his life after the devastation of war.",
    },
    {
      id: 4,
      image: imagePaths[3],
      title: "Support Sahil fight Mental Health Issues",
      donations: "3K",
      amountRaised: 125441,
      progress: 100,
      description:
        "Conditions like depression, anxiety, PTSD, and bipolar disorder require professional help, therapy, and support groups to manage symptoms and improve quality of life.",
    },
    {
      id: 5,
      image: imagePaths[4],
      title: "Elder Care and Aging",
      donations: "1.8K",
      amountRaised: 77124,
      progress: 85,
      description: "Older adults may require support with daily activities, medical care, and emotional companionship.",
    },
  ];

  // Function to handle panel click and navigate
  const handlePanelClick = (id) => {
    // Find the card with the selected ID
    const selectedCard = cards.find((card) => card.id === id);

    // Navigate to the Info page and pass the data as state
    navigate("/info", {
      state: {
        title: selectedCard.title,
        description: selectedCard.description,
        donateText: "Donate Now",
        chartData: {
          labels: ["Donated", "Remaining"],
          datasets: [
            {
              data: [selectedCard.amountRaised, 100000 - selectedCard.amountRaised],
              backgroundColor: ["#36A2EB", "#FF6384"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
        imageSrc: selectedCard.image,
        altText: selectedCard.title,
      },
    });
  };

  return (
    <div className="app-container">
      <div className="layout">
        <LeftPanel card={cards[0]} onClick={handlePanelClick} />
        <RightPanel cards={cards.slice(1)} onClick={handlePanelClick} />
      </div>
    </div>
  );
};

export default Maincard;
