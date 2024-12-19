export const allQuestions = [
  {
    id: 1,
    question: "What is the largest planet in our Solar System?",
    answer_type : "abcd",
    answers: [
      { letter: "a", answer: "Jupiter", status: "correct" },
      { letter: "b", answer: "Saturn", status: "wrong" },
      { letter: "c", answer: "Neptune", status: "wrong" },
    ],
    hints: [
      "It is known for its Great Red Spot.",
      "It has the most moons of any planet in the Solar System."
    ],
    tags: ["Science", "Astronomy", "Planets"]
  },
  {
    id: 2,
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer_type : "abcd",
    answers: [
      { letter: "a", answer: "William Shakespeare", status: "correct" },
      { letter: "b", answer: "Charles Dickens", status: "wrong" },
      { letter: "c", answer: "Leo Tolstoy", status: "wrong" },
    ],
    hints: [
      "He is often called England's national poet.",
      "He also wrote 'Hamlet' and 'Macbeth'."
    ],
    tags: ["Literature", "History", "Arts"]
  },
  {
    id: 3,
    question: "What is the capital city of Japan?",
    answer_type : "abcd",
    answers: [
      { letter: "a", answer: "Tokyo", status: "correct" },
      { letter: "b", answer: "Kyoto", status: "wrong" },
      { letter: "c", answer: "Osaka", status: "wrong" },
    ],
    hints: [
      "It is the most populous metropolitan area in the world.",
      "It hosted the 2020 Summer Olympics."
    ],
    tags: ["Geography", "Asia", "Cities"]
  },
  {
    id: 4,
    question: "What is the chemical symbol for Gold?",
    answer_type : "abcd",
    answers: [
      { letter: "a", answer: "Au", status: "correct" },
      { letter: "b", answer: "Ag", status: "wrong" },
      { letter: "c", answer: "Gd", status: "wrong" },
    ],
    hints: [
      "It comes from the Latin word 'Aurum'.",
      "Its atomic number is 79."
    ],
    tags: ["Science", "Chemistry", "Elements"]
  },
  {
    id: 5,
    question: "In which year did the World War II end?",
    answer_type : "abcd",
    answers: [
      { letter: "a", answer: "1945", status: "correct" },
      { letter: "b", answer: "1939", status: "wrong" },
      { letter: "c", answer: "1918", status: "wrong" },
    ],
    hints: [
      "It ended in the mid-1940s.",
      "It marked the end of the European conflict on May 8th."
    ],
    tags: ["History", "Wars", "20th Century"]
  },
  {
    id: 6,
    question: "Which element has the atomic number 1?",
    answer_type : "abcd",
    answers: [
      { letter: "a", answer: "Hydrogen", status: "correct" },
      { letter: "b", answer: "Helium", status: "wrong" },
      { letter: "c", answer: "Oxygen", status: "wrong" },
    ],
    hints: [
      "It is the lightest and most abundant element in the universe.",
      "Its gas form is highly flammable."
    ],
    tags: ["Science", "Chemistry", "Elements"]
  },
  {
    id: 7,
    question: "Who painted the Mona Lisa?",
    answer_type : "abcd",
    answers: [
      { letter: "a", answer: "Leonardo da Vinci", status: "correct" },
      { letter: "b", answer: "Vincent van Gogh", status: "wrong" },
      { letter: "c", answer: "Pablo Picasso", status: "wrong" },
    ],
    hints: [
      "He was a leading figure of the Italian Renaissance.",
      "He also designed flying machines and studied anatomy."
    ],
    tags: ["Arts", "History", "Renaissance"]
  },
  {
    id: 8,
    question: "What is the hardest natural substance on Earth?",
    answer_type : "boolean",
    answers: [
      {  answer: "True", status: "correct" },
      {  answer: "False", status: "wrong" },
    ],
    hints: [
      "It is often used in jewelry.",
      "Its structure is a crystal lattice."
    ],
    tags: ["Science", "Geology", "Chemistry"]
  },
  {
    id: 9,
    question: "Which language is primarily spoken in Brazil?",
    answer_type : "free_input",
    answers: [
      "Spanish",
      'spanish',
      'espanol'
    ],
    hints: [
      "It is different from most of its South American neighbors.",
      "Brazil was a colony of this European country."
    ],
    tags: ["Geography", "Languages", "South America"]
  },
  {
    id: 10,
    question: "What is the process by which plants make their food?",
    answer_type : "boolean",
    answers: [
      { letter: "a", answer: "Photosynthesis", status: "correct" },
      { letter: "b", answer: "Respiration", status: "wrong" },
      { letter: "c", answer: "Transpiration", status: "wrong" },
    ],
    hints: [
      "It involves converting light energy into chemical energy.",
      "It produces oxygen as a byproduct."
    ],
    tags: ["Science", "Biology", "Botany"]
  },
];
