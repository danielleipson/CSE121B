const ingredientsInput = document.getElementById('ingredients');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', function() {
  const ingredients = ingredientsInput.value.trim().split(',');

  
  const apiKey = '0b93bb25bca84a468e29ec5f8a2c1042';
  const baseUrl = 'https://api.spoonacular.com/recipes/search';
  
  fetch(`${baseUrl}?apiKey=${apiKey}&includeIngredients=${ingredients.join(',')}`)
  .then(response => response.json())
  .then(data => {
    resultsDiv.innerHTML = '';
    console.log(data);
    if (data.results && data.results.length > 0) {
      data.results.forEach(recipe => {
        const recipeElement = document.createElement('p');
        recipeElement.innerHTML = `- <a href="${recipe.sourceUrl}" target="_blank">${recipe.title}</a>`;
        resultsDiv.appendChild(recipeElement);
      });
    } else {
      resultsDiv.textContent = 'No recipes found for these ingredients.';
    }
  })
  .catch(error => {
    console.error('Error fetching recipes:', error);
    resultsDiv.textContent = 'An error occurred while searching for recipes.';
  });
});