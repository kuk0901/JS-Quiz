import { resultScores } from "./data.js";

const resultScore = new URLSearchParams(location.search).get("resultScore");
console.log(resultScore);
const result = resultScores[`${resultScore}`];

const resultScoreEl = document.querySelector(".result-score");

resultScoreEl.textContent = result;
