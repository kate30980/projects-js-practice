async function getRandomMeal() {
  const randomMeal = fetch("www.themealdb.com/api/json/v1/1/random.php");
}

async function getMealById(id) {
  const meal = fetch("www.themealdb.com/api/json/v1/1/random.php?i=" + id);
}

async function getMealsBySearch(term) {
  const Meals = fetch("www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}
