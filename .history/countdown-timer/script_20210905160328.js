const newYears = "1 Jan 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearsDate - currentDate) * 1000;
  console.log(newYearsDate - currentDate);

  const days = seconds / 3600 / 24;
}
//initial caal
countdown();

setInterval(countdown, 1000);
