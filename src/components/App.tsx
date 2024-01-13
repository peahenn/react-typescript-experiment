import React, { useState } from 'react';
import '../App.css';
import Header from '../Header';
import Footer from '../Footer';
import Signup from '../components/Signup';
import Signin from '../components/Signin';  
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
// import firebase from './firebase';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false); // State for showing Signin form

  const handleSignUpClick = () => {
    setShowSignup(true);
    setShowSignin(false); // Close Signin form if Sign Up is clicked
  };

  const handleSignInClick = () => {
    setShowSignin(true);
    setShowSignup(false); // Close Sign Up form if Sign In is clicked
  };

  return (
    <AuthProvider>
    <div className="App">
      <Header />
      <main className="App-main clearfix">
        <div className="left-box">
          <h2 className="left-box-text">Message</h2>
        </div>
        <h1>Create your Event Planner Now</h1>
        <p>Let's get started!</p>

        {showSignup ? (
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
            <div className="w-100" style={{ maxWidth: "400px"}}>
              <Signup />
            </div>
          </Container>
          
        ) : showSignin ? (
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
            <div className="w-100" style={{ maxWidth: "400px"}}>
              <Signin />
            </div>
          </Container>
        ) : (
          <div className="button-container">
            <button className="btn-sign-up" onClick={handleSignUpClick}>
              Sign Up
            </button>
            <button className="btn-sign-in" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
    </AuthProvider>
  );
};

export default App;
