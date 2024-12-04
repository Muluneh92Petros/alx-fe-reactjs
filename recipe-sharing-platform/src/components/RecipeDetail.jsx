import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = (shadow) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
      <ul className="list-disc list-inside mb-4">
       <li>200g Spaghetti</li>
       <li>100g Bacon</li>
       <li>2 Eggs</li>
       <li>50g Parmesan Cheese</li>
       <li>Salt and Pepper</li>
    </ul>
    <p>1. Boil spaghetti. 2. Fry bacon. 3. Beat eggs and mix with cheese. 4. Combine all.</p>
        {/* Replace with actual ingredients; here it's just a placeholder */}
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
      <p>{recipe.summary} {/* Replace with actual instructions */}</p>
    </div>
  );
};

export default RecipeDetail;