export const questions = [
  {
    number: "01",
    question:
      "다음 중 배열데이터에서 사용하는 for 반복문으로 <span>옳은</span> 것은?",
    choices: [
      {
        text: "for are",
        value: "X"
      },
      { text: "for is", value: "X" },
      { text: "for of", value: "O" },
      { text: "for in", value: "X" }
    ]
  },
  {
    number: "02",
    question: "다음 중 즉시 실행 함수의 표현으로 <span>잘못된</span> 것은?",
    choices: [
      { text: "(function () {})()", value: "X" },
      { text: "(() => {})()", value: "X" },
      { text: "+ function () {}()", value: "X" },
      { text: "+ function () {}()", value: "O" }
    ]
  },
  {
    number: "03",
    question:
      "Math 내장 객체에서 사용하는 메소드 중 정수를 반환하는 메소드가 <span>아닌</span> 것은?",
    choices: [
      { text: "Math.random()", value: "O" },
      { text: "Math.round()", value: "X" },
      { text: "Math.ceil()", value: "X" },
      { text: "Math.floor())", value: "X" }
    ]
  },
  {
    number: "04",
    question:
      "다음 중 Nullish 병합 연산자를 뜻하는 기호로 <span>옳은</span> 것은?",
    choices: [
      {
        text: "!",
        value: "X"
      },
      { text: "??", value: "O" },
      { text: "...", value: "X" },
      { text: "||", value: "X" }
    ]
  }
];
export const resultScores = {
  XXXX: "0점",
  OXXX: "25점",
  XOXX: "25점",
  XXOX: "25점",
  XXXO: "25점",
  OOXX: "50점",
  OXOX: "50점",
  OXXO: "50점",
  XOOX: "50점",
  XOXO: "50점",
  XXOO: "50점",
  OOOX: "75점",
  OOXO: "75점",
  OXOO: "75점",
  XOOO: "75점",
  OOOO: "100점"
};
