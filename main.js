// GENERATE CASE MORPION

const create_morpion = () => {
  const div_morpion = document.querySelector("#morpion");
  for (let index = 1; index <= 3; index++) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    div_morpion.appendChild(wrapper);
    for (let i = 1; i <= 3; i++) {
      const div_case = document.createElement("div");
      div_case.classList.add("case");
      wrapper.appendChild(div_case);
    }
  }
};

// FUNCTION PARTY WIN BY X OR O

const win = (str) => {
  // SHOW THE WINNER
  const result = document.getElementById("result");
  result.textContent = str + " gagne la partie.";
  document.querySelector("#morpion").classList.add("rotate-in-center");
  $(".case").off("click");
  // ANIMATION WIN
  setTimeout(() => {
    $(".case").on("click", morpion);
    result.textContent = "";
    document.querySelector("#morpion").classList.remove("rotate-in-center");
  }, 5000);

  // REFRESH ALL CASE
  const cases_result = document.querySelectorAll(".case");
  for (let q = 0; q < cases_result.length; q++) {
    cases_result[q].textContent = "";
  }
};

create_morpion();

// CLICK EVENT ON CASE AND CHECK IF WIN

let selector = "X";

$(".case").click(morpion);

function morpion(str) {
  const cases = document.querySelectorAll(".case");
  if (selector === "X") {
    selector = "O";
    $(this).append("X");
  } else if (selector === "O") {
    selector = "X";
    $(this).append("O");
  }
  if (
    (cases[0].textContent === "X" &&
      cases[3].textContent === "X" &&
      cases[6].textContent === "X") ||
    (cases[1].textContent === "X" &&
      cases[4].textContent === "X" &&
      cases[7].textContent === "X") ||
    (cases[2].textContent === "X" &&
      cases[5].textContent === "X" &&
      cases[8].textContent === "X") ||
    (cases[2].textContent === "X" &&
      cases[5].textContent === "X" &&
      cases[8].textContent === "X") ||
    (cases[0].textContent === "X" &&
      cases[1].textContent === "X" &&
      cases[2].textContent === "X") ||
    (cases[3].textContent === "X" &&
      cases[4].textContent === "X" &&
      cases[5].textContent === "X") ||
    (cases[6].textContent === "X" &&
      cases[7].textContent === "X" &&
      cases[8].textContent === "X") ||
    (cases[0].textContent === "X" &&
      cases[4].textContent === "X" &&
      cases[8].textContent === "X") ||
    (cases[2].textContent === "X" &&
      cases[4].textContent === "X" &&
      cases[6].textContent === "X")
  ) {
    str = "X";
    win(str, selector);
  } else if (
    (cases[0].textContent === "O" &&
      cases[3].textContent === "O" &&
      cases[6].textContent === "O") ||
    (cases[1].textContent === "O" &&
      cases[4].textContent === "O" &&
      cases[7].textContent === "O") ||
    (cases[2].textContent === "O" &&
      cases[5].textContent === "O" &&
      cases[8].textContent === "O") ||
    (cases[2].textContent === "O" &&
      cases[5].textContent === "O" &&
      cases[8].textContent === "O") ||
    (cases[0].textContent === "O" &&
      cases[1].textContent === "O" &&
      cases[2].textContent === "O") ||
    (cases[3].textContent === "O" &&
      cases[4].textContent === "O" &&
      cases[5].textContent === "O") ||
    (cases[6].textContent === "O" &&
      cases[7].textContent === "O" &&
      cases[8].textContent === "O") ||
    (cases[0].textContent === "O" &&
      cases[4].textContent === "O" &&
      cases[8].textContent === "O") ||
    (cases[2].textContent === "O" &&
      cases[4].textContent === "O" &&
      cases[6].textContent === "O")
  ) {
    str = "O";
    win(str);
  }
  $(this).off("click");
}
