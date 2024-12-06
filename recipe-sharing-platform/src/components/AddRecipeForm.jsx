import React, { useState } from 'react';

const AddRecipeForm = (validate,errors,setErrors) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!title || !ingredients || !preparation) {
            setError('All fields are required!');
            return;
        }

        const ingredientList = ingredients.split(',').map(item => item.trim());
        if (ingredientList.length < 2) {
            setError('Please provide at least two ingredients.');
            return;
        }

        // Submit form data (You can implement the submission logic here)
        console.log({ title, ingredients: ingredientList, preparation });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="title">Recipe Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter recipe title"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="ingredients">Ingredients</label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter ingredients separated by commas"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="preparation">Preparation Steps</label>
                <textarea
                    id="preparation"
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Describe the preparation steps"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
            >
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;
