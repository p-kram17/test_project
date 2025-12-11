import React from 'react';
import './App.css';
import ContactPage from "./pages/ContactUs/contactUsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
