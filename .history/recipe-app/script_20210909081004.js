const meals = document.getElementById("meals");

getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  console.log(randomMeal);

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const meal = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php?i=" + id
  );
}

async function getMealsBySearch(term) {
  const meals = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}

addMeal(mealData, random){
  const meal = document.createElement("div");
  meal.classList.add('meal');
  meal.innerHTML =`
    <div class=""meal-header>
      <img src="http://">
    </div>
  `
}