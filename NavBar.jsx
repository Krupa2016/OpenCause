// import React, { useContext } from 'react';
// import { UserContext } from './UserContext'; 
// import { useNavigate, Link } from 'react-router-dom';

// const Navbar = () => {
//   const { user, setUser } = useContext(UserContext); 
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/signin');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <h3>Open Cause</h3>
//         {user ? (
//           <div className="user-profile">
//             <img
//               src={user.profilePic || 'default-profile-pic.png'}
//               alt="User"
//               className="user-profile-img"
//             />
//             <span>{user.name}</span>
//             <button className="logout-btn" onClick={handleLogout}>Log Out</button>
//           </div>
//         ) : (
//           <Link to="/signin">
//             <button className="signin-btn">Sign In</button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate, Link } from 'react-router-dom';
 // Optional: Add styles for better visuals

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/start-project">
          <h3>Open Cause</h3>
        </Link>
        {user ? (
          <div className="user-profile">
            <img
              src={user.picture || 'default-profile-pic.png'} // Use user's profile picture or fallback
              alt="User"
              className="user-profile-img"
            />
            <span>{user.name}</span> {/* Display user's name */}
            <button className="logout-btn" onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
