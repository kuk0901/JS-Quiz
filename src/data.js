export const questions = [
  {
    number: "01",
    question:
      "다음 중 배열데이터에서 사용하는 for 반복문으로 <span>옳은</span> 것은?",
    choices: [
      {
        text: "for are",
        value: 0
      },
      { text: "for is", value: 0 },
      { text: "for of", value: 25 },
      { text: "for in", value: 0 }
    ]
  },
  {
    number: "02",
    question: "다음 중 즉시 실행 함수의 표현으로 <span>잘못된</span> 것은?",
    choices: [
      { text: "(function () {})()", value: 0 },
      { text: "(() => {})()", value: 0 },
      { text: "+ function () {}()", value: 0 },
      { text: "- function () {}()", value: 25 }
    ]
  },
  {
    number: "03",
    question:
      "Math 내장 객체에서 사용하는 메소드 중 정수를 반환하는 메소드가 <span>아닌</span> 것은?",
    choices: [
      { text: "Math.random()", value: 25 },
      { text: "Math.round()", value: 0 },
      { text: "Math.ceil()", value: 0 },
      { text: "Math.floor())", value: 0 }
    ]
  },
  {
    number: "04",
    question:
      "다음 중 Nullish 병합 연산자를 뜻하는 기호로 <span>옳은</span> 것은?",
    choices: [
      {
        text: "!",
        value: 0
      },
      { text: "??", value: 25 },
      { text: "...", value: 0 },
      { text: "||", value: 0 }
    ]
  }
];
export const resultScores = {
  0: "0점",
  25: "25점",
  50: "50점",
  75: "75점",
  100: "100점"
};
