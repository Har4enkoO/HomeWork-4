const students = ['Саша', 'Игорь', 'Лена', 'Ира', 'Алексей', 'Светлана'];
const studentsGirl = ['Лена', 'Ира', 'Светлана'];
const studentsBoy = ['Саша', 'Игорь', 'Алексей'];
const themes = [
  'Дифференциальные уравнения',
  'Теория автоматов',
  'Алгоритмы и структуры данных'
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs() {
  let result = [];
  for (let i = 0; i < studentsGirl.length; i++) {
    result = [...result, [studentsGirl[i], studentsBoy[i]]];
  }
  return result;
}
const pairs = getPairs();
console.log(pairs);

function pairsAndThemes() {
  let result = [];
  for (let i = 0; i < studentsGirl.length; i++) {
    result = [...result, [studentsGirl[i] + ' и ' + studentsBoy[i], themes[i]]];
  }
  return result;
}
const pAt = pairsAndThemes();
console.log(pAt);

function success() {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    result = [...result, [students[i], marks[i]]];
  }
  return result;
}
const s = success();
console.log(s);

function studentsThemesAndMarks() {
  let result = [];
  for (let i = 0; i < studentsGirl.length; i++) {
    result = [
      ...result,
      [
        studentsGirl[i] + ' и ' + studentsBoy[i],
        themes[i],
        Math.floor(Math.random() * 5 + 1)
      ]
    ];
  }
  return result;
}
const sTAM = studentsThemesAndMarks();
console.log(sTAM);
