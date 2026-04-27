import React from 'react';
import Header from './head.jsx';
import Body from './body.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';
import Signup from './signup.jsx';

function App() {
  return (
    <div className="app-background">
      <Header />
      <div className="container py-5">
        <div className="row gx-4 gy-4 align-items-start">
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <h2 className="card-title mb-3">Welcome to Bookmart</h2>
                <p className="text-muted">
                  Sign up and explore a modern library experience built for students and book lovers.
                </p>
                <Body />
              </div>
            </div>
            <Contact />
          </div>
          <div className="col-lg-5">
            <div className="card signup-card shadow-sm border-0">
              <div className="card-body">
                <h2 className="card-title mb-4">Create your account</h2>
                <Signup />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
