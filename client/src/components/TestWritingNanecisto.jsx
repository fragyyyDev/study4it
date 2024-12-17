// TestWritingNanecisto.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestTimer from './TestTimer';
import { allQuestions } from '../data/questions';
import { Lightbulb } from '@phosphor-icons/react';
import TestResults from './TestResults';

const STORAGE_KEY_NANECISTO = 'NANECISTO';
const NUMBER_OF_QUESTIONS = 10; //Kolik otazek bude

function TestWritingNanecisto() {
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]); 
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [resultsActive, setResultsActive] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]); 

  useEffect(() => {
    const storedSession = JSON.parse(localStorage.getItem(STORAGE_KEY_NANECISTO));

    if (!storedSession || !storedSession.expirationTime) {
      navigate('/testy'); 
      return;
    }

    if (Date.now() > storedSession.expirationTime) {
      localStorage.removeItem(STORAGE_KEY_NANECISTO);
      navigate('/testy'); 
      return;
    }

    setSession(storedSession);
    setIsCheckingSession(false);

    if (!storedSession.selectedQuestionIds) {
      const selected = getRandomQuestions(allQuestions, NUMBER_OF_QUESTIONS);
      const shuffledIds = shuffleArray(selected.map(q => q.id));
      const updatedSession = {
        ...storedSession,
        selectedQuestionIds: shuffledIds,
        numberOfQuestion: 0, 
        selectedAnswers: {},
      };
      localStorage.setItem(STORAGE_KEY_NANECISTO, JSON.stringify(updatedSession));
      setSelectedQuestionIds(shuffledIds);
      setNumberOfQuestion(0);
      setSelectedAnswers({});
    } else {
      setSelectedQuestionIds(storedSession.selectedQuestionIds);
      setNumberOfQuestion(storedSession.numberOfQuestion || 0);
      setSelectedAnswers(storedSession.selectedAnswers || {});
    }
  }, [navigate]);

  // Na vytahnuti nahodnych otazek
  const getRandomQuestions = (questionsArray, num) => {
    if (questionsArray.length < num) {
      console.warn(`Requested ${num} questions, but only ${questionsArray.length} available.`);
      return questionsArray;
    }
    const shuffled = shuffleArray(questionsArray);
    return shuffled.slice(0, num);
  };

  // Fisher-yates algoritmus na zamichani otazek 
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  //Uklada to do localstorage kdyby user dal reload
  useEffect(() => {
    if (session) {
      const updatedSession = {
        ...session,
        selectedAnswers: selectedAnswers,
        numberOfQuestion: numberOfQuestion,
      };
      localStorage.setItem(STORAGE_KEY_NANECISTO, JSON.stringify(updatedSession));
    }
  }, [selectedAnswers, numberOfQuestion, session]);

  const handleExpire = () => {
    localStorage.removeItem(STORAGE_KEY_NANECISTO);
    const { correct, wrong } = calculateResults();
    setCorrectAnswers(correct);
    setWrongAnswers(wrong);
    setResultsActive(true);
  };

  const handleSubmitQuiz = () => {
    // Check if all questions are answered
    const allAnswered = selectedQuestionIds.every(qId => selectedAnswers[qId]);
    if (!allAnswered) {
      alert('Please answer all questions before submitting the quiz.');
      return;
    }
    const { correct, wrong } = calculateResults();
    setCorrectAnswers(correct);
    setWrongAnswers(wrong);
    setResultsActive(true);
  };

  const handleAnswerSelect = (questionId, answerLetter) => {
    setSelectedAnswers((prevSelected) => ({
      ...prevSelected,
      [questionId]: answerLetter,
    }));
  };

  // Pocita spravne spatne vysledky
  const calculateResults = () => {
    const correct = [];
    const wrong = [];

    selectedQuestionIds.forEach((qId) => {
      const question = allQuestions.find(q => q.id === qId);
      if (!question) return;

      const userAnswerLetter = selectedAnswers[qId];
      const userAnswer = question.answers.find(a => a.letter === userAnswerLetter);

      if (userAnswer) {
        if (userAnswer.status === 'correct') {
          correct.push({
            question: question.question,
            selectedAnswer: userAnswer.answer,
            correctAnswer: getCorrectAnswer(question.answers),
          });
        } else {
          wrong.push({
            question: question.question,
            selectedAnswer: userAnswer.answer,
            correctAnswer: getCorrectAnswer(question.answers),
          });
        }
      }
    });

    return { correct, wrong };
  };


  //vraci jen spravne hodnoty
  const getCorrectAnswer = (answers) => {
    const correct = answers.find(a => a.status === 'correct');
    return correct ? correct.answer : 'Nezodpověděl jsi správně nic 😥❌';
  };

  //funkce do resultu aby se to smazalo vsechno a poslalo te to back
  const deleteSession = () => {
    localStorage.removeItem(STORAGE_KEY_NANECISTO);
    setSelectedAnswers({});
    setNumberOfQuestion(0);
    setCorrectAnswers([]);
    setWrongAnswers([]);
    setResultsActive(false);
    setSession(null);
    setIsCheckingSession(true);
    setSelectedQuestionIds([]);
    navigate('/testy');
  };

  if (isCheckingSession || selectedQuestionIds.length === 0) {
    return <div>Nacitani..</div>;
  }

  const currentQuestionId = selectedQuestionIds[numberOfQuestion];
  const currentQuestion = allQuestions.find(q => q.id === currentQuestionId);
  if (!currentQuestion) {
    return <div>Nenalezena Otazka.</div>;
  }

  const isLastQuestion = numberOfQuestion === selectedQuestionIds.length - 1; //pouzivam u dalsi button jestli to nahodou neni posledni otazka zeo

  return (
    <div className="quiz-container p-6 max-w-3xl mx-auto">
      {!resultsActive ? (
        <div className="">
          <TestTimer expirationTime={session.expirationTime} onExpire={handleExpire} />

          <div className="progress-container my-4">
            <p>
              Otázka {numberOfQuestion + 1} z {selectedQuestionIds.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#F1EAFF] h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${((numberOfQuestion + 1) / selectedQuestionIds.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between items-center my-4">
            <h2 className='text-2xl inter font-semibold'>{currentQuestion.question}</h2>
            <Lightbulb color='black' size={32} />
          </div>

          {/* Display Answers */}
          <div className="answers-container my-4">
            {currentQuestion.answers.map((answer) => (
              <div key={answer.letter} className="answer-option flex items-center my-2">
                <input
                  type="radio"
                  id={`question-${currentQuestion.id}-answer-${answer.letter}`}
                  name={`question-${currentQuestion.id}`}
                  value={answer.letter}
                  checked={selectedAnswers[currentQuestion.id] === answer.letter}
                  onChange={() => handleAnswerSelect(currentQuestion.id, answer.letter)}
                  className="mr-2"
                />
                <label htmlFor={`question-${currentQuestion.id}-answer-${answer.letter}`} className="inter">
                  {`${answer.letter}. ${answer.answer}`}
                </label>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-x-4 my-4">
            {/* "Zpět" (Back) Button */}
            <button
              className='p-2 bg-[#F1EAFF] rounded-xl px-4'
              onClick={() => {
                if (numberOfQuestion > 0) {
                  setNumberOfQuestion(numberOfQuestion - 1);
                }
              }}
              disabled={numberOfQuestion === 0}
              style={{
                cursor: numberOfQuestion === 0 ? 'not-allowed' : 'pointer',
                opacity: numberOfQuestion === 0 ? 0.5 : 1,
              }}
            >
              Zpět
            </button>

            {/* "Další" (Next) Button */}
            <button
              className='p-2 bg-[#F1EAFF] rounded-xl px-4'
              onClick={() => {
                if (numberOfQuestion < selectedQuestionIds.length - 1) {
                  setNumberOfQuestion(numberOfQuestion + 1);
                }
                // No need for alert since the button will be disabled when on the last question
              }}
              disabled={isLastQuestion}
              style={{
                cursor: isLastQuestion ? 'not-allowed' : 'pointer',
                opacity: isLastQuestion ? 0.5 : 1,
              }}
            >
              Další
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmitQuiz}
            disabled={!selectedQuestionIds.every(qId => selectedAnswers[qId])}
            className={`px-4 py-2 rounded ${!selectedQuestionIds.every(qId => selectedAnswers[qId])
              ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600'
              }`}
          >
            Odevzdat
          </button>
        </div>
      ) : (
        <TestResults
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          deleteSession={deleteSession}
        />
      )}
    </div>
  );
}

export default TestWritingNanecisto;
