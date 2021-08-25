
// selectors
const search_btn = document.querySelector(".fa-search")
const input = document.querySelector('.input-search')
const recipe_container = document.querySelector('.recipe-container')

// functions


// function for addding html data
const createRecipe = (recipeArr) => {
    let html = "";
    recipeArr.map((recipe) => {
        html += `<div class="card recipe" style="width: 18rem;">
        <img class="card-img-top"style="width: 100%;" src=${recipe.recipe.image} alt=${recipe.recipe.label}>
        <div class="card-body">
          <h3 class="card-title">${recipe.recipe.label}</h3>
          <p class="card-text">Dietlabels: ${recipe.recipe.dietLabels}<br>Calories: ${recipe.recipe.calories.toFixed(2)}<br>Dishtype: ${recipe.recipe.dishType}<br>MealType: ${recipe.recipe.mealType}<br>Cuisinetype: ${recipe.recipe.cuisineType}</p>
          <a href=${recipe.recipe.url} target=_blank class="btn btn-primary">Check Recipe</a>
        </div>
      </div> `
    })
    recipe_container.innerHTML = html;
    input.value = "";
}
//function for fetch url
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    createRecipe(data.hits);
}

//function for clicking button
const addFood = () => {
    const api_id = "287b0cd3";
    const api_key = "6557c63788f26ba0c4c89ada1995009d";
    const q = input.value;
    const base_url = `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${api_id}&app_key=${api_key}`;
    fetchData(base_url);

}

//events

search_btn.addEventListener('click', addFood)