// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  const location = useLocation();
  const isDasboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        
       

      </Routes>
      
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
