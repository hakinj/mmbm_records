// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
 
 

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
