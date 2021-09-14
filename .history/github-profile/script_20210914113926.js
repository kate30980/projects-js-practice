const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("florinpop17");

async function getUser(user) {
  const resp = await fetch(APIURL + user);
  const respData = await resp.json();

  createUserCard(respData);
}
function createUserCard(user) {
  const cardHTML = `
    <div class = "card">
        <div class = "img-container">
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>   
        
        <div class = "user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class = "info">
                <li><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>${user.followers}</li>
                <li>${user.following}</li>
                <li>${user.public_repos}</li>
            </ul> 
        </div>
    </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);

    search.value = "";
  }
});
