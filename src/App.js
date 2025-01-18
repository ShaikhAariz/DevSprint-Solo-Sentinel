import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import './styles/styles.css';
import Question from './components/Question'; // Import the Question component
import QuoteSection from './components/QuoteSection'; 

// QuizPage Component
const QuizPage = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      question: "What year did the moon landing occur?",
      options: ["1965", "1969", "1972", "1959"],
      answer: "1969",
    },
    {
      question: "Who composed the music for 'Star Wars'?",
      options: ["Hans Zimmer", "John Williams", "Danny Elfman", "Alan Silvestri"],
      answer: "John Williams",
    },
    {
      question: "Which company developed the game 'Minecraft'?",
      options: ["Mojang", "Naughty Dog", "Epic Games", "Valve"],
      answer: "Mojang",
    },
    {
      question: "In which year was the first PlayStation released?",
      options: ["1994", "1997", "2000", "2003"],
      answer: "1994",
    },
    {
      question: "Who is the creator of the 'Super Mario' franchise?",
      options: ["Shigeru Miyamoto", "Hideo Kojima", "Yuji Naka", "John Carmack"],
      answer: "Shigeru Miyamoto",
    },
    {
      question: "What was the first video game ever made?",
      options: ["Pong", "Space Invaders", "Tennis for Two", "Pac-Man"],
      answer: "Tennis for Two",
    },
    {
      question: "Which gaming console introduced the Kinect motion sensor?",
      options: ["PlayStation 3", "Xbox 360", "Wii", "Nintendo Switch"],
      answer: "Xbox 360",
    },
    {
      question: "What is the name of the main character in 'The Legend of Zelda'?",
      options: ["Link", "Zelda", "Ganondorf", "Epona"],
      answer: "Link",
    },
    {
      question: "Which game features the character Lara Croft?",
      options: ["Tomb Raider", "Uncharted", "Assassin's Creed", "The Witcher"],
      answer: "Tomb Raider",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="quiz-page">
      <h1>Quiz Page</h1>
      {gameOver ? (
        <div>
          <h2>Game Over!</h2>
          <p>Your score: {score}/{questions.length}</p>
          <button onClick={() => window.location.reload()} className="retro-button">
            Restart Game
          </button>
        </div>
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};
  

// HomePage Component
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="main-container">
        <h1>Welcome to Retro Revival</h1>
        
        {/* Your existing content */}
        <div className="newspaper-container">
          <Link to="/quiz"> {/* Wrap the newspaper in Link for routing */}
            <div className="animated-newspaper">
              <div className="newspaper-title">Retro Gaming Quiz</div>
              <div className="newspaper-tagline">A Journey to the Golden Age of Games</div>
              <div className="click-to-enter">Click to Enter</div>
            </div>
          </Link>
        </div>

        {/* Add the QuoteSection here */}
        <QuoteSection />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;
