import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestTimer from './TestTimer';
import { allQuestions } from '../data/questions';
import { ArrowCircleLeft, ArrowCircleRight, CursorText, Info, Sparkle } from '@phosphor-icons/react';
import TestResults from './TestResults';
import PauzaScreen from './PauzaScreen';

const STORAGE_KEY_NANECISTO = 'NANECISTO';
const NUMBER_OF_QUESTIONS = 10; //Kolik otazek bude

const STAGES = [
  { name: 'Matematika', durationMinutes: 70},
  { name: 'Pauza', durationMinutes: 15 },
  { name: 'Český Jazyk', durationMinutes: 60 }
];

function TestWritingNanecisto() {
  const navigate = useNavigate();
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [expirationTime, setExpirationTime] = useState(null);

  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [resultsActive, setResultsActive] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    const storedSession = JSON.parse(localStorage.getItem(STORAGE_KEY_NANECISTO));

    if (!storedSession) {
      navigate('/testy');
      return;
    }

    let stageIndex = storedSession.currentStageIndex ?? 0;
    let expTime = storedSession.expirationTime ?? null;

    if (expTime === null) {
      expTime = Date.now() + STAGES[stageIndex].durationMinutes * 60 * 1000;
    }

    if (Date.now() > expTime) {
      let overTime = Date.now() - expTime;

      while (overTime > 0 && stageIndex < STAGES.length) {
        const stageDurationMs = STAGES[stageIndex].durationMinutes * 60 * 1000;
        if (overTime >= stageDurationMs) {
          overTime -= stageDurationMs;
          stageIndex++;
        } else {
          const remaining = stageDurationMs - overTime;
          expTime = Date.now() + remaining;
          overTime = 0;
        }
      }

      if (stageIndex >= STAGES.length) {
        localStorage.removeItem(STORAGE_KEY_NANECISTO);
        endTest();
        return;
      }
    } else {
      const stageDurationMs = STAGES[stageIndex].durationMinutes * 60 * 1000;
      const remainingTime = expTime - Date.now();
      if (remainingTime > stageDurationMs) {
        expTime = Date.now() + stageDurationMs;
      }
    }

    setCurrentStageIndex(stageIndex);
    setExpirationTime(expTime);

    if (stageIndex >= STAGES.length) {
      localStorage.removeItem(STORAGE_KEY_NANECISTO);
      endTest();
      return;
    }

    if (!storedSession.selectedQuestionIds) {
      const selected = getRandomQuestions(allQuestions, NUMBER_OF_QUESTIONS);
      const shuffledIds = shuffleArray(selected.map(q => q.id));
      const updatedSession = {
        ...storedSession,
        currentStageIndex: stageIndex,
        expirationTime: expTime,
        selectedQuestionIds: shuffledIds,
        numberOfQuestion: 0,
        selectedAnswers: {}
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

    setIsCheckingSession(false);
  }, [navigate]);

  useEffect(() => {
    if (!isCheckingSession) {
      const sessionData = {
        currentStageIndex,
        expirationTime,
        selectedQuestionIds,
        numberOfQuestion,
        selectedAnswers
      };
      localStorage.setItem(STORAGE_KEY_NANECISTO, JSON.stringify(sessionData));
    }
  }, [isCheckingSession, currentStageIndex, expirationTime, selectedQuestionIds, numberOfQuestion, selectedAnswers]);

  const getRandomQuestions = (questionsArray, num) => {
    if (questionsArray.length < num) {
      console.warn(`Requested ${num} questions, but only ${questionsArray.length} available.`);
      return questionsArray;
    }
    const shuffled = shuffleArray(questionsArray);
    return shuffled.slice(0, num);
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleExpire = () => {
    if (currentStageIndex < STAGES.length - 1) {
      const nextIndex = currentStageIndex + 1;
      const newExpirationTime = Date.now() + STAGES[nextIndex].durationMinutes * 60 * 1000;
      setCurrentStageIndex(nextIndex);
      setExpirationTime(newExpirationTime);
    } else {
      endTest();
    }
  };

  const handleSkipPause = () => {
    if (currentStageIndex === 1) {
      const nextIndex = 2;
      const newExpirationTime = Date.now() + STAGES[nextIndex].durationMinutes * 60 * 1000;
      setCurrentStageIndex(nextIndex);
      setExpirationTime(newExpirationTime);
    }
  };

  const endTest = () => {
    localStorage.removeItem(STORAGE_KEY_NANECISTO);
    const { correct, wrong } = calculateResults();
    setCorrectAnswers(correct);
    setWrongAnswers(wrong);
    setResultsActive(true);
  };

  const handleSubmitQuiz = () => {
    const allAnswered = selectedQuestionIds.every(qId => selectedAnswers[qId]);
    if (!allAnswered) {
      alert('Prosím zodpověz všechny otázky před odevzdáním.');
      return;
    }
    const { correct, wrong } = calculateResults();
    setCorrectAnswers(correct);
    setWrongAnswers(wrong);
    setResultsActive(true);
  };

  const handleAnswerSelect = (questionId, answerLetter) => {
    setSelectedAnswers(prevSelected => ({
      ...prevSelected,
      [questionId]: answerLetter,
    }));
  };

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

  const deleteSession = () => {
    localStorage.removeItem(STORAGE_KEY_NANECISTO);
    setSelectedAnswers({});
    setNumberOfQuestion(0);
    setCorrectAnswers([]);
    setWrongAnswers([]);
    setResultsActive(false);
    setSelectedQuestionIds([]);
    setIsCheckingSession(true);
    navigate('/testy');
  };

  if (isCheckingSession || selectedQuestionIds.length === 0) {
    return <div>Načítání...</div>;
  }

  const stage = STAGES[currentStageIndex];

  return (
    <div className="">

      {!resultsActive && stage.name !== 'Pauza' ? (
        // When it's not pause and results are not active
        <div className="w-full flex flex-col justify-between">
          <div>
            <h2 className='text-2xl inter font-bold'>Probíhá test</h2>
          </div>
          <TestTimer
            expirationTime={expirationTime}
            onExpire={handleExpire}
            stageName={stage.name}
            isPauseStage={stage.name === 'Pauza'}
            onSkipPause={handleSkipPause}
            showPath={true}
            showTimer={true}
          />
        </div>
      ) : !resultsActive && stage.name === 'Pauza' ? (
        // When it's pause and results are not active
        <div className="w-full flex flex-col justify-between">
          <div>
            <h2 className='text-2xl inter font-bold'>Probíhá test</h2>
          </div>
          <TestTimer
            expirationTime={expirationTime}
            onExpire={handleExpire}
            stageName={stage.name}
            isPauseStage={stage.name === 'Pauza'}
            onSkipPause={handleSkipPause}
            showPath={true}
            showTimer={false}
          />
          <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
          <PauzaScreen
            expirationTime={expirationTime}
            onExpire={handleExpire}
            stageName={stage.name}
            isPauseStage={stage.name === 'Pauza'}
            onSkipPause={handleSkipPause}
          />
        </div>
      ) : null}



      {!resultsActive ? (
        <>
          {stage.name === 'Pauza' ? (
            // If on Pauza, do not render anything else.
            null
          ) : (
            // If not Pauza, render the rest of the test content
            <div className="h-full w-full flex flex-col relative">
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
              {(() => {
                const currentQuestionId = selectedQuestionIds[numberOfQuestion];
                const currentQuestion = allQuestions.find(q => q.id === currentQuestionId);
                if (!currentQuestion) {
                  return <div>Nenalezena Otázka.</div>;
                }

                const isLastQuestion = numberOfQuestion === selectedQuestionIds.length - 1;

                return (
                  <>
                    <div className="flex flex-col flex-grow">
                      <div className="flex flex-col justify-center my-4">
                        <p className='inter font-medium'>Vyber odpověď na následující otázku</p>
                        <h2 className='text-2xl inter font-semibold'>{currentQuestion.question}</h2>
                      </div>
                      {showHints && currentQuestion.hints && currentQuestion.hints.length > 0 && (
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
                    <div className="flex flex-col w-full">
                      {/* Display Answers */}
                      <div className={`answers-container my-4 grid ${currentQuestion.answer_type !== "free_input" ? "grid-cols-2" : ""} gap-4`}>
                        {currentQuestion.answer_type === "abcd" && (
                          currentQuestion.answers.map((answer) => {
                            const isSelected = selectedAnswers[currentQuestion.id] === answer.letter;
                            return (
                              <label
                                key={answer.letter}
                                htmlFor={`question-${currentQuestion.id}-answer-${answer.letter}`}
                                className={`p-4 border rounded cursor-pointer flex items-center 
                    transition-colors duration-300
                    ${isSelected ? "bg-[#7263FF] text-white" : "bg-[#F1EAFF]"}`}
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
                    ${isSelected ? "bg-[#7263FF] text-white" : "bg-[#F1EAFF]"}`}
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
                          <div className="w-full bg-[#F1EAFF] rounded-lg relative">
                            <CursorText
                              size={24}
                              className="absolute top-1/2 left-2 transform -translate-y-1/2 pointer-events-none"
                            />
                            <input
                              type="text"
                              id={`question-${currentQuestion.id}-free-input`}
                              name={`question-${currentQuestion.id}`}
                              value={selectedAnswers[currentQuestion.id] || ""}
                              onChange={(e) => handleAnswerSelect(currentQuestion.id, e.target.value)}
                              placeholder="Zde napiš svou odpověď"
                              className="w-full bg-[#F1EAFF] placeholder-black p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7263FF]"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex gap-x-4 my-4">
                        <button
                          className='p-2 w-1/2 bg-[#F1EAFF] rounded-xl font-medium px-4 flex gap-x-4 items-center justify-start'
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
                          <ArrowCircleLeft size={24} />
                          Zpět
                        </button>

                        <button
                          className='p-2 w-1/2 bg-[#F1EAFF] rounded-xl font-medium px-4 flex gap-x-4 items-center justify-end'
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
                          Další úloha <ArrowCircleRight size={24} />
                        </button>
                      </div>

                      {isLastQuestion && (
                        <button
                          onClick={handleSubmitQuiz}
                          disabled={!selectedQuestionIds.every(qId => selectedAnswers[qId])}
                          className={`bg-[#F1EAFF] rounded-xl px-4 w-full py-4`}
                        >
                          Odevzdat
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </>
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
