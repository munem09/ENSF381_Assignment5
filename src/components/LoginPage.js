import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleSwitchForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <Header />
      {showLoginForm ? <LoginForm onSwitchForm={handleSwitchForm} /> : <SignupForm onSwitchForm={handleSwitchForm} />}
      <Footer />
    </div>
  );
};

export default LoginPage;
