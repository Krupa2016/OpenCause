import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import StartProject from './components/StartProject';
import Browse from './components/Browse'; 
import MainCard from './components/Maincard';
import Donate from './components/Donate';
import Footer from './components/footer';
import { Info } from './components/Info';
import SignIn from './components/signin';
import Profile from './components/Profile';



function App() {
 
  const data = {
    labels: ['Equipments', 'Labour', 'Sanitization', 'Remaining'],
    datasets: [
      {
        label: 'Donations',
        data: [12, 19, 3, 5],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' votes';
          }
        }
      }
    }
  };


  const user = {
    name: "John Doe",
    profilePic: "https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg",
  };

  const topDonorIn = "Environment";
  const fundsRaised = 1500;

  const donationCategories = [
    { label: 'Medical', progress: 85 },
    { label: 'Education', progress: 50 },
    { label: 'Environment', progress: 90 },
    { label: 'Animal Rescue', progress: 70 },
  ];

  const fundsCategories = [
   
    { label: 'Animal Rescue', progress: 75 },
    { label: 'Child Education', progress: 80 },
  ];

  return (
    <>
      <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/donate" element={<Donate />} />
          {/* <Route path="/info" element={<Info title="How the UK Can Donate to Those Affected by the California Wildfires" description=" Across California, wildfires have burned thousands of acres, destroying homes and businesses and forcing
              thousands to evacuate. You can support those affected by donating to the verified fundraisers on this page.
              Our Trust & Safety team will continue to update this page with more fundraisers as they are verified.
              "  chartData={data} options={options} imageSrc="https://images.pexels.com/photos/12085633/pexels-photo-12085633.jpeg?auto=compress&cs=tinysrgb&w=600" altText="California wildfire with orange sky near a property"/>} />
              
        </Routes> */}

<Route path="/info" element={<Info />} />
<Route path="/info" element={<Info />} />
<Route path="/signin" element={<SignIn />} />
<Route
  path="/profile"
  element={
    <Profile
    user={user}
        fundsRaised={fundsRaised}
        topDonorIn={topDonorIn}
        donationCategories={donationCategories}
        fundsCategories={fundsCategories}
    />
  }
/>

        </Routes>
        
        <Footer/>
      </Router>

      {/* <div className="app-container">
        <div className="layout">
          <div className="left-panel">
            <MainCard {...cards[0]} />
          </div>
          <div className="right-panel">
            {cards.slice(1).map((card, index) => (
              <MainCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
