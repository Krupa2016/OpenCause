import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./SignIn.css";

function Signup() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${user.access_token}`,

          },
        })
        .then(async (res) => {
          setProfile(res.data);
          localStorage.setItem("user", JSON.stringify(res.data)); // Store user info

          // Send user data to backend
          await axios.post('http://localhost:5000/api/auth/google', {
            googleId: res.data.id,
            name: res.data.name,
            email: res.data.email,
            picture: res.data.picture,
          });

          navigate("/start-project");
        })
        .catch((err) => {
          console.log('Error fetching profile:', err);
          setError('Failed to fetch profile data.');
        });
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
    localStorage.removeItem("user"); // Clear user info
  };

  return (


    <div className="signin-container">
      <div className="welcome-box">
        <h2>Welcome!</h2>
        <p>Login to OpenCas to continue.</p>
      </div>
      {profile ? (
        <div className="profile-info">
          <img src={profile.picture} alt="User" />
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Signup;