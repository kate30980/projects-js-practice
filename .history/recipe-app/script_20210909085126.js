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

function addMeal(mealData, random = false) {
  console.log(mealData);

  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `

      <div class="meal-header">
      ${
        random
          ? `<span class="random">
              Random Recipe
          </span>`
          : ""
      }
          <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
      </div>
      <div class="meal-body">
          <h4>${mealData.strMeal}</h4>
          <button class="fav-btn"><i class="fas fa-heart"></i></button>
      </div>

  `;

  const btn = meal.querySelector(".meal-body .fav-btn");

  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      removeMealFromLS(mealData);
    }
    btn.classList.toggle("active");
  });

  meals.appendChild(meal);
}

function addMealToLS(mealId) {
  const mealIds = getMealsFromLS();

  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealFromLS() {
  const mealIds = getMealsFromLS();

  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id != mealIds))
  );
}

function getMealsFromLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
  return mealIds;
}
