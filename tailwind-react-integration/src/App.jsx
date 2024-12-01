import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import UserProfile from './component/UserProfile';
// src/App.jsx
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import useRecipeStore from './recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  const initializeRecipes = useRecipeStore(state => state.initializeRecipes);

  useEffect(() => {
    // Sample data to initialize the store
    const sampleRecipes = [
      { id: 1, title: 'Pasta', description: 'Delicious pasta recipe.' },
      { id: 2, title: 'Salad', description: 'Fresh salad recipe.' },
      { id: 3, title: 'Pizza', description: 'Cheesy pizza recipe.' }
    ];
    initializeRecipes(sampleRecipes);
  }, [initializeRecipes]);

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
      <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <AddRecipeForm />
      <Router>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Router>
      <FavoritesList />
      <RecommendationsList />
    </div>
    </>
  )
}

export default App
