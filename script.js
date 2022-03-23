// challenge you age in days

// function ageInDays(){
//     let birtYear = parseInt(prompt("What was year been born"));
//     let days = (2018-birtYear) * 365;
//     document.querySelector(
//       "#flex-box-result"
//     ).innerHTML = `Your are ${days}  days old`;
// }

function ageInDays() {
  let birthYear = prompt("What is Your year when you wAs born?");
  let days = (2022 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let answer = document.createTextNode(`YOU ARE ${days} IN DAYS OLD`);
  h1.setAttribute("id", "days");
  h1.appendChild(answer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("flex-box-result").remove();
}
