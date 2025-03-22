import React from 'react';
import './CardComponent.css';

const CardComponent = () => {
  const cardsData = [
    {
      image: 'https://images.pexels.com/photos/668790/pexels-photo-668790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Save The Coral Reefs',
      label: '2.3k Donations',
      progress: 60,
      description: 'TCoral reefs are vital ecosystems, providing habitats for marine life and protecting coastlines, but they are increasingly threatened by bleaching caused by rising sea temperatures and pollution from agricultural runoff, plastics, and sewage. Reducing greenhouse gas emissions, implementing sustainable coastal practices, and establishing marine protected areas can help mitigate these threats. Additionally, coral restoration projects and public education play a crucial role in ensuring the survival of these fragile ecosystems..'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/students_planting_trees11_480x480.jpg?v=1686916471',
      title: 'Tree Plantation Drive',
      label: '7.8k Donation',
      progress: 80,
      description: 'A community-driven tree planting initiative aims to combat deforestation, enhance local biodiversity, and improve air quality by encouraging residents to actively participate in greening their surroundings. By restoring natural habitats, this initiative helps support wildlife populations and create more resilient ecosystems in urban and rural areas alike. In addition to environmental benefits, it fosters a sense of collective responsibility, bringing people together to contribute to the well-being of their local communities.'
    },
    {
      image: 'https://images.pexels.com/photos/51951/forest-fire-fire-smoke-conservation-51951.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Wildfire Recovery Assistance',
      label: '2.5k Donation',
      progress: 40,
      description: 'A community-led effort is focused on providing immediate relief and long-term support to victims of the recent wildfire, including offering emergency shelter, food, and medical assistance. Along with direct aid, the initiative seeks to rebuild homes, restore essential infrastructure, and provide psychological counseling to help individuals and families heal from the trauma. The collective effort not only aims to aid recovery but also to create stronger, more resilient communities that are better equipped to face future challenges.'
    }
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt="Card" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <span className="card-label">{card.label}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${card.progress}%` }}
              ></div>
            </div>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
