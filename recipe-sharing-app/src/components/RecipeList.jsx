import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes
  }));

  const displayRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;