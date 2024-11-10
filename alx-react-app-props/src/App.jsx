import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import UserProfile from './UserProfile'

import React from 'react';
import Counter from './components/Counter';
import ProfilePage from './ProfilePage';
import UserContext, { UserProvider } from './UserContext';
import UserContext.Provider;
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Application</h1>
      <Counter />
    </div>
  );
}

export default App;
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />
      <Header />
       <MainContent />
       <Footer />
       <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  )
}

export default App
