import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from "./components/UserContext.jsx";

import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GoogleOAuthProvider clientId="360462330673-c4k9e8a94jn5k4dfosk0f9fimecq81t1.apps.googleusercontent.com">
  <UserProvider>
  <App />

  </UserProvider>

  </GoogleOAuthProvider>

        
      
  
   
  </StrictMode>,
)
