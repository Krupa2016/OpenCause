import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Browse.css';

const LeftPanelCardb = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
  return (
    <div className="left-panel-cardb" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-donations">{donations} donations</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

const RightPanelCardb = ({ id, image, title, donations, amountRaised, progress, description, onClick }) => {
  return (
    <div className="right-panel-cardb" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-donations">{donations} donations</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="card-raised">€{amountRaised.toLocaleString()} raised</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

const LeftPanelb = ({ cards, onClick }) => (
  <div className="left-panelb">
    {cards.slice(0, 2).map((card) => (
      <LeftPanelCardb key={card.id} {...card} onClick={onClick} />
    ))}
  </div>
);

const RightPanelb = ({ cards, onClick }) => (
  <div className="right-panelb">
    {cards.map((card, index) => (
      <RightPanelCardb key={index} {...card} onClick={onClick} />
    ))}
  </div>
);

const Browse = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");

  const imagePaths = [
    "https://images.pexels.com/photos/9037205/pexels-photo-9037205.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9543405/pexels-photo-9543405.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/668790/pexels-photo-668790.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9034664/pexels-photo-9034664.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5027792/pexels-photo-5027792.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7656994/pexels-photo-7656994.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16105713/pexels-photo-16105713/free-photo-of-group-of-paramedics-walking-through-a-demolished-city.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1344265/pexels-photo-1344265.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/14823613/pexels-photo-14823613.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/51951/forest-fire-fire-smoke-conservation-51951.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/753619/pexels-photo-753619.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1119974/pexels-photo-1119974.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30390246/pexels-photo-30390246/free-photo-of-children-in-syrian-refugee-camp-in-idlib.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1344270/pexels-photo-1344270.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/14000708/pexels-photo-14000708.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30390244/pexels-photo-30390244/free-photo-of-boy-holding-flag-outside-makeshift-tent-in-idlib.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8488031/pexels-photo-8488031.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/28124030/pexels-photo-28124030/free-photo-of-smiling-boy-hugging-dog-in-rustic-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6936477/pexels-photo-6936477.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/23495757/pexels-photo-23495757/free-photo-of-three-women-sitting-on-a-couch-talking-to-each-other.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6936020/pexels-photo-6936020.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/236151/pexels-photo-236151.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6936391/pexels-photo-6936391.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7551646/pexels-photo-7551646.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7551609/pexels-photo-7551609.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5790706/pexels-photo-5790706.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7551683/pexels-photo-7551683.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5790810/pexels-photo-5790810.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4661296/pexels-photo-4661296.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/20214485/pexels-photo-20214485/free-photo-of-dogs-sleeping-along-a-chainlink-fence.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16465603/pexels-photo-16465603/free-photo-of-dogs-in-shelter.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30371894/pexels-photo-30371894/free-photo-of-majestic-rhinoceros-grazing-in-african-wilderness.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1350590/pexels-photo-1350590.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6568499/pexels-photo-6568499.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/814898/pexels-photo-814898.jpeg?auto=compress&cs=tinysrgb&w=600"
  
  ];
  
  const categories = ["All", "Environmental", "Disaster Relief", "Rebuilding", "Mental Health", "Elder Care"];
  
  const cards = [
    // Environmental Category
    {
      id: 1,
      image: imagePaths[0],
      title: "Clean The Beaches - East Coast",
      donations: "3.8K",
      amountRaised: 62000,
      progress: 92,
      description: "A community initiative to remove debris from East Coast beaches.",
      category: "Environmental"
    },
    {
      id: 2,
      image: imagePaths[1],
      title: "Protect The Forests",
      donations: "4K",
      amountRaised: 90000,
      progress: 80,
      description: "A campaign to plant trees and protect our forests.",
      category: "Environmental"
    },
    {
      id: 3,
      image: imagePaths[2],
      title: "Save The Coral Reefs",
      donations: "2.5K",
      amountRaised: 50000,
      progress: 75,
      description: "Protecting coral reefs from bleaching and pollution.",
      category: "Environmental"
    },
    {
      id: 4,
      image: imagePaths[3],
      title: "Clean The Oceans",
      donations: "6K",
      amountRaised: 110000,
      progress: 60,
      description: "An effort to reduce plastic pollution in our oceans.",
      category: "Environmental"
    },
    {
      id: 5,
      image: imagePaths[4],
      title: "Tree Plantation Drive",
      donations: "2.2K",
      amountRaised: 47000,
      progress: 85,
      description: "A community initiative to plant trees and restore natural habitats.",
      category: "Environmental"
    },
    {
      id: 6,
      image: imagePaths[5],
      title: "Wildlife Conservation Awareness",
      donations: "5K",
      amountRaised: 135000,
      progress: 90,
      description: "Spreading awareness about the importance of protecting wildlife.",
      category: "Environmental"
    },
  
    // Disaster Relief Category
    {
      id: 7,
      image: imagePaths[6],
      title: "Emergency Relief for Earthquake Victims",
      donations: "5.2K",
      amountRaised: 120000,
      progress: 60,
      description: "Providing immediate aid for victims of a recent earthquake.",
      category: "Disaster Relief"
    },
    {
      id: 8,
      image: imagePaths[7],
      title: "Hurricane Assistance Fund",
      donations: "7.1K",
      amountRaised: 150000,
      progress: 85,
      description: "Supporting communities affected by hurricane damage.",
      category: "Disaster Relief"
    },
    {
      id: 9,
      image: imagePaths[8],
      title: "Flood Relief for South Asia",
      donations: "6.3K",
      amountRaised: 80000,
      progress: 70,
      description: "Providing essential relief for flood victims in South Asia.",
      category: "Disaster Relief"
    },
    {
      id: 10,
      image: imagePaths[9],
      title: "Wildfire Recovery Assistance",
      donations: "3.5K",
      amountRaised: 90000,
      progress: 75,
      description: "Helping victims of the recent wildfire to recover.",
      category: "Disaster Relief"
    },
    {
      id: 11,
      image: imagePaths[10],
      title: "Tornado Victim Aid Fund",
      donations: "4.8K",
      amountRaised: 135000,
      progress: 80,
      description: "Immediate relief for families affected by tornadoes.",
      category: "Disaster Relief"
    },
    {
      id: 12,
      image: imagePaths[11],
      title: "Cyclone Disaster Relief Fund",
      donations: "3.2K",
      amountRaised: 78000,
      progress: 55,
      description: "Providing aid and resources for survivors of the recent cyclone.",
      category: "Disaster Relief"
    },
  
    // Rebuilding Category
    {
      id: 13,
      image: imagePaths[12],
      title: "Support Ali Rebuilding a Life Shattered by War",
      donations: "1.6K",
      amountRaised: 64769,
      progress: 70,
      description: "Aid Ali in rebuilding his life after the devastation of war.",
      category: "Rebuilding"
    },
    {
      id: 14,
      image: imagePaths[13],
      title: "Rebuild Homes After Tsunami",
      donations: "3K",
      amountRaised: 200000,
      progress: 50,
      description: "Help families rebuild homes destroyed by the tsunami.",
      category: "Rebuilding"
    },
    {
      id: 15,
      image: imagePaths[14],
      title: "Reconstruct The Earthquake Damaged Village",
      donations: "4K",
      amountRaised: 120000,
      progress: 65,
      description: "Providing funds for the reconstruction of earthquake-hit villages.",
      category: "Rebuilding"
    },
    {
      id: 16,
      image: imagePaths[15],
      title: "Rebuilding After War: A New Beginning",
      donations: "2K",
      amountRaised: 55000,
      progress: 80,
      description: "Helping refugees rebuild their lives after a devastating war.",
      category: "Rebuilding"
    },
    {
      id: 17,
      image: imagePaths[16],
      title: "Restoring Homes After Natural Disasters",
      donations: "2.3K",
      amountRaised: 75000,
      progress: 60,
      description: "Rebuilding homes and communities after devastating natural disasters.",
      category: "Rebuilding"
    },
    {
      id: 18,
      image: imagePaths[17],
      title: "Building a Future for War-Affected Children",
      donations: "1.8K",
      amountRaised: 40000,
      progress: 50,
      description: "Providing education and shelter for children affected by war.",
      category: "Rebuilding"
    },
  
    // Mental Health Category
    {
      id: 19,
      image: imagePaths[18],
      title: "Support Sahil Fight Mental Health Issues",
      donations: "3K",
      amountRaised: 125441,
      progress: 100,
      description: "Conditions like depression, anxiety, PTSD, and bipolar disorder require professional help, therapy, and support groups to manage symptoms and improve quality of life.",
      category: "Mental Health"
    },
    {
      id: 20,
      image: imagePaths[19],
      title: "Mental Health Awareness Campaign",
      donations: "2K",
      amountRaised: 50000,
      progress: 40,
      description: "Raising awareness about mental health conditions and resources available.",
      category: "Mental Health"
    },
    {
      id: 21,
      image: imagePaths[20],
      title: "Therapy Support for Depression",
      donations: "1.5K",
      amountRaised: 40000,
      progress: 50,
      description: "Providing therapy and support for those suffering from depression.",
      category: "Mental Health"
    },
    {
      id: 22,
      image: imagePaths[21],
      title: "Support for PTSD Survivors",
      donations: "3.2K",
      amountRaised: 95000,
      progress: 60,
      description: "Providing therapy and resources for survivors of PTSD.",
      category: "Mental Health"
    },
    {
      id: 23,
      image: imagePaths[22],
      title: "Anxiety and Panic Attack Support Fund",
      donations: "4.1K",
      amountRaised: 120000,
      progress: 70,
      description: "Supporting individuals dealing with anxiety and panic disorders.",
      category: "Mental Health"
    },
    {
      id: 24,
      image: imagePaths[23],
      title: "Promote Mental Health in Schools",
      donations: "2.3K",
      amountRaised: 75000,
      progress: 80,
      description: "Promoting mental health education and support services in schools.",
      category: "Mental Health"
    },
  
    // Elder Care Category
    {
      id: 25,
      image: imagePaths[24],
      title: "Elder Care and Aging - Support",
      donations: "1.8K",
      amountRaised: 77124,
      progress: 85,
      description: "Older adults may require support with daily activities, medical care, and emotional companionship.",
      category: "Elder Care"
    },
    {
      id: 26,
      image: imagePaths[25],
      title: "Companion Services for Senior Citizens",
      donations: "1.2K",
      amountRaised: 30000,
      progress: 60,
      description: "Providing companionship services to senior citizens living alone.",
      category: "Elder Care"
    },
    {
      id: 27,
      image: imagePaths[26],
      title: "Elderly Mobility Aid Fund",
      donations: "2.3K",
      amountRaised: 45000,
      progress: 70,
      description: "Raising funds to provide mobility aids to elderly people.",
      category: "Elder Care"
    },
    {
      id: 28,
      image: imagePaths[27],
      title: "Home Care for Elderly People",
      donations: "3.4K",
      amountRaised: 85000,
      progress: 75,
      description: "Offering home care services for elderly people who need assistance.",
      category: "Elder Care"
    },
    {
      id: 29,
      image: imagePaths[28],
      title: "Elderly Nutrition Support",
      donations: "2.1K",
      amountRaised: 62000,
      progress: 65,
      description: "Providing nutrition support and meal delivery to elderly people in need.",
      category: "Elder Care"
    },
    {
      id: 30,
      image: imagePaths[29],
      title: "Healthcare for Senior Citizens",
      donations: "3.5K",
      amountRaised: 105000,
      progress: 80,
      description: "Providing healthcare services for senior citizens in underprivileged areas.",
      category: "Elder Care"
    },
  
    // Animal Welfare Category
    {
      id: 31,
      image: imagePaths[30],
      title: "Rescue Homeless Pets",
      donations: "3K",
      amountRaised: 50000,
      progress: 50,
      description: "Helping homeless pets find shelter and families to adopt them.",
      category: "Animal Welfare"
    },
    {
      id: 32,
      image: imagePaths[31],
      title: "Protect Endangered Species",
      donations: "4K",
      amountRaised: 150000,
      progress: 70,
      description: "Helping protect endangered species and their habitats.",
      category: "Animal Welfare"
    },
    {
      id: 33,
      image: imagePaths[32],
      title: "Wildlife Conservation Fund",
      donations: "5K",
      amountRaised: 200000,
      progress: 90,
      description: "Supporting wildlife conservation efforts around the world.",
      category: "Animal Welfare"
    },
    {
      id: 34,
      image: imagePaths[33],
      title: "Save Stray Dogs Campaign",
      donations: "2.3K",
      amountRaised: 60000,
      progress: 55,
      description: "Helping stray dogs by providing shelter, food, and medical care.",
      category: "Animal Welfare"
    },
    {
      id: 35,
      image: imagePaths[34],
      title: "Adopt a Pet, Save a Life",
      donations: "4.2K",
      amountRaised: 110000,
      progress: 65,
      description: "Encouraging people to adopt pets and reduce the stray population.",
      category: "Animal Welfare"
    },
    {
      id: 36,
      image: imagePaths[35],
      title: "Save the Tigers Fund",
      donations: "5.5K",
      amountRaised: 220000,
      progress: 85,
      description: "Funding conservation efforts to protect the endangered tigers.",
      category: "Animal Welfare"
    }
  ];
  
  //
  const filteredCards = cards.filter((card) => 
    (category === "All" ? card.category === "Environmental" : card.category === category)
  );
  
  // Function to handle panel click and navigate
  const handlePanelClick = (id) => {
    const selectedCard = cards.find((card) => card.id === id);
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
    <>
    <div className="app-container1">
      <div className="category-filter">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="layout1">
        <LeftPanelb cards={filteredCards} onClick={handlePanelClick} />
        <RightPanelb cards={filteredCards.slice(2)} onClick={handlePanelClick} />
      </div>
    </div>
  </>
  );
};

export default Browse;
