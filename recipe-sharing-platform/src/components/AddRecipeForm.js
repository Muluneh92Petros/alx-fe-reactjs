import React, { useState } from 'react';
import AddRecipeForm from './components/AddRecipeForm';

const AddRecipeForm = ({ onAddRecipe }) => {
  const RecipeManager = () => {
  const handleAddRecipe = (newRecipe) => {
  console.log('New Recipe Added:', newRecipe);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions) {
      setError('All fields are required');
      return;
    }

    const ingredientList = ingredients.split(',').map(item => item.trim());
    if (ingredientList.length < 2) {
      setError('Please enter at least two ingredients');
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredientList,
      instructions,
    };

    onAddRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
    setError('');
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ingredients (separated by commas)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Preparation Steps</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;



import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';

const RecipeManager = () => {
  const handleAddRecipe = (newRecipe) => {
    console.log('New Recipe Added:', newRecipe);
    // Here you can add logic to store the new recipe (e.g., updating state or sending to an API)
  };

  return (
    <div>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
};

export default RecipeManager;