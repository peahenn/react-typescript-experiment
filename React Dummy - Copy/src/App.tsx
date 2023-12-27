// src/App.tsx
import * as React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';





interface AppProps {
  // Define prop types for App
}

const App: React.FC<AppProps> = (_) => {
  return (
    <div className="App">
      <Header />
      <main className="App-main clearfix">
        <div className="left-box">
          <h2 className="left-box-text">Message</h2>
        </div>
        <h1>Create your Event Planner Now</h1>
        <p>Let's get started!</p>
        <div className="button-container">
          <button className="btn-sign-up">Sign In</button>
          <button className="btn-sign-in">Sign Up</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;