const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");
const currentYear = new Date().getFullYear();
const zeroYear = currentYear + 3113;
const leapYear = zeroYear % 4;

select.addEventListener("change", () => {
  const choice = select.value;
  
  if (choice === "Nemontemi") {
    if (leapYear === 0) {
      days = 6;
    } else {
      days = 5;
    }
  } else if (choice === "selectMonth") {
    days = 0;
  } else {
    days = 20;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i=1; i<=days; i++) {
    const  listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}