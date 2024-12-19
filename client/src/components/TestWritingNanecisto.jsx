// TestWritingNanecisto.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestTimer from './TestTimer';
import { allQuestions } from '../data/questions';
import { Info, Lightbulb, Sparkle } from '@phosphor-icons/react';
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
  const [showHints, setShowHints] = useState(false)

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
  
      const userAnswer = selectedAnswers[qId];
  
      if (question.answer_type === 'abcd' || question.answer_type === 'boolean') {
        const correctAnswerObj = question.answers.find(a => a.status === 'correct');
        const correctAnswer = correctAnswerObj ? correctAnswerObj.answer : null;
  
        if (userAnswer === correctAnswerObj?.letter || userAnswer === correctAnswer) {
          correct.push({
            question: question.question,
            selectedAnswer: correctAnswer,
            correctAnswer,
          });
        } else {
          wrong.push({
            question: question.question,
            selectedAnswer: question.answers.find(a => a.letter === userAnswer)?.answer || userAnswer,
            correctAnswer,
          });
        }
      } else if (question.answer_type === 'free_input') {
        const correctAnswerList = question.answers.map(a => a.toLowerCase().trim());
        const userAnswerNormalized = userAnswer?.toLowerCase().trim();
  
        if (correctAnswerList.includes(userAnswerNormalized)) {
          correct.push({
            question: question.question,
            selectedAnswer: userAnswer,
            correctAnswer: question.answers.join(', '),
          });
        } else {
          wrong.push({
            question: question.question,
            selectedAnswer: userAnswer,
            correctAnswer: question.answers.join(', '),
          });
        }
      }
    });
  
    return { correct, wrong };
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
    <div className="">
      {!resultsActive ? (
        <div className="w-full flex justify-between items-center">
          <div className="">
            <h2 className='text-2xl inter font-bold'>Probíhá test</h2>
            <h3 className='inter font-medium'>Přijímací zkoušky / Simulace nanečisto / Matematika</h3>
          </div>
          <TestTimer expirationTime={session.expirationTime} onExpire={handleExpire} />
        </div>
      ) : ("")}

      {!resultsActive ? (
        <div className="h-full w-full flex flex-col">
          {/* Header: Progress Bar */}
          <div className="progress-container my-4 mt-12">
            <div className="flex w-full justify-between">
              <p className='inter font-medium'>
                Úloha {numberOfQuestion + 1} z {selectedQuestionIds.length}
              </p>
              <div className="flex items-center gap-x-4">
                <p className='flex inter text-gray-500 items-center gap-x-2 font-medium text-sm'>
                  <Info color='black' size={16} onClick={() => setShowHints(!showHints)} className='cursor-pointer' />
                  Potřebuji nápovědu
                </p>
                <p className='flex inter text-[#7263FF] items-center gap-x-2 font-medium text-sm'>
                  <Sparkle color='#7263FF' size={16} />
                  Vysvětlit pomocí AI
                </p>
              </div>
            </div>

            <div className="w-full bg-[#F1EAFF] rounded-full h-2.5">
              <div
                className="bg-[#7263FF] h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${((numberOfQuestion + 1) / selectedQuestionIds.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Main Content: Question and Hints */}
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col justify-center my-4">
              <p className='inter font-medium'>Vyber odpověď na následující otázku</p>
              <h2 className='text-2xl inter font-semibold'>{currentQuestion.question}</h2>
            </div>
            {showHints && currentQuestion.hints.length > 0 && (
              <div className="inter mb-4">
                <h3>Nápovědy:</h3>
                <ul className="list-disc list-inside">
                  {currentQuestion.hints.map((hint, index) => (
                    <li key={index}>{hint}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer: Answers and Navigation Buttons */}
          <div className="flex flex-col">
            {/* Display Answers */}
            <div className="answers-container my-4 grid grid-cols-2 gap-4">
              {currentQuestion.answer_type === "abcd" && (
                currentQuestion.answers.map((answer) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === answer.letter;
                  return (
                    <label
                      key={answer.letter}
                      htmlFor={`question-${currentQuestion.id}-answer-${answer.letter}`}
                      className={`p-4 border rounded cursor-pointer flex items-center 
          transition-colors duration-300
          ${isSelected ? "bg-[#7263FF] text-white" : "bg-[#F1EAFF]"}
        `}
                    >
                      <input
                        type="radio"
                        id={`question-${currentQuestion.id}-answer-${answer.letter}`}
                        name={`question-${currentQuestion.id}`}
                        value={answer.letter}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(currentQuestion.id, answer.letter)}
                        className="mr-2 accent-[#7263FF]"
                      />
                      <div className="flex gap-x-4 items-center">
                        <span className="inter font-bold text-lg">
                          {`${answer.letter.toUpperCase()}.`}
                        </span>
                        <span className="inter font-medium">{answer.answer}</span>
                      </div>
                    </label>
                  );
                })
              )}

              {currentQuestion.answer_type === "boolean" && (
                currentQuestion.answers.map((answer, index) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === answer.answer;
                  return (
                    <label
                      key={index}
                      htmlFor={`question-${currentQuestion.id}-answer-${answer.answer}`}
                      className={`p-4 border rounded cursor-pointer flex items-center 
          transition-colors duration-300
          ${isSelected ? "bg-[#7263FF] text-white" : "bg-[#F1EAFF]"}
        `}
                    >
                      <input
                        type="radio"
                        id={`question-${currentQuestion.id}-answer-${answer.answer}`}
                        name={`question-${currentQuestion.id}`}
                        value={answer.answer}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(currentQuestion.id, answer.answer)}
                        className="mr-2 accent-[#7263FF]"
                      />
                      <div className="flex items-center">
                        <span className="inter font-medium">{answer.answer}</span>
                      </div>
                    </label>
                  );
                })
              )}

              {currentQuestion.answer_type === "free_input" && (
                <div className="p-4">
                  <label htmlFor={`question-${currentQuestion.id}-free-input`} className="block font-medium mb-2">
                    Your Answer:
                  </label>
                  <input
                    type="text"
                    id={`question-${currentQuestion.id}-free-input`}
                    name={`question-${currentQuestion.id}`}
                    value={selectedAnswers[currentQuestion.id] || ""}
                    onChange={(e) => handleAnswerSelect(currentQuestion.id, e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7263FF]"
                  />
                </div>
              )}

            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-x-4 my-4">
              {/* "Zpět" (Back) Button */}
              <button
                className='p-2 w-1/2 bg-[#F1EAFF] rounded-xl px-4'
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
                className='p-2 w-1/2 bg-[#F1EAFF] rounded-xl px-4'
                onClick={() => {
                  if (numberOfQuestion < selectedQuestionIds.length - 1) {
                    setNumberOfQuestion(numberOfQuestion + 1);
                  }
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
            {isLastQuestion && (
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
            )}
          </div>
        </div>
      ) : (
        <TestResults
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          deleteSession={deleteSession}
        />
      )
      }
    </div >
  );
}

export default TestWritingNanecisto;
