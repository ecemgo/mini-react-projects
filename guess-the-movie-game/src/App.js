import React, { useState, useEffect } from "react";

const movies = [
  { name: "Interstellar", image: "images/interstellar.jpg" },
  { name: "Avatar", image: "images/avatar.jpg" },
  { name: "Titanic", image: "images/titanic.jpg" },
];

const App = () => {
  const [score, setScore] = useState(0);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [warningShown, setWarningShown] = useState(false);
  const [isGameOverModalVisible, setGameOverModalVisibility] = useState(false);
  const [isWinGameModalVisible, setWinGameModalVisibility] = useState(false);

  const currentMovie = movies[currentMovieIndex];

  const getNextMovie = () => {
    setCurrentMovieIndex(currentMovieIndex + 1);
  };

  const showWarningMessage = () => {
    setWarningShown(true);
  };

  const showGameOverModal = () => {
    setGameOverModalVisibility(true);
  };

  const showWinGameModal = () => {
    setWinGameModalVisibility(true);
  };

  const closeModal = () => {
    setGameOverModalVisibility(false);
    setWinGameModalVisibility(false);
    setUserGuess("");
    // resetStyles();

    if (!warningShown) {
      startGame();
    } else {
      setWarningShown(false);
    }
  };

  const checkGuess = () => {
    const trimmedUserGuess = userGuess.trim().toLowerCase();
    const currentMovie = movies[currentMovieIndex];

    if (trimmedUserGuess === currentMovie.name.toLowerCase()) {
      setScore(score + 1);
      setCurrentMovieIndex(currentMovieIndex + 1);
      setUserGuess("");
      // resetStyles();
      if (score + 1 < movies.length) {
        getNextMovie();
      } else {
        showWinGameModal();
      }
    } else if (trimmedUserGuess === "") {
      if (!warningShown) {
        showWarningMessage();
        setWarningShown(true);
      }
    } else {
      showGameOverModal();
    }
  };

  // const resetStyles = () => {};

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    setScore(0);
    setCurrentMovieIndex(0);
  };

  return (
    <div className="game-container">
      <h1>Guess the Movie</h1>
      <div id="score">Score: {score}</div>
      <img id="movieImage" src={currentMovie.image} alt="Movie Poster" />
      <div className="input-box">
        <input
          type="text"
          id="guessInput"
          placeholder="Enter movie name"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button onClick={checkGuess} className="submit-btn btn">
          Submit
        </button>
      </div>

      {/* Modal */}
      {warningShown && (
        <div className="modal">
          <div className="modal-content">
            <p className="message">Please enter a movie name! 👀</p>
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {isGameOverModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p className="message">Game Over! 😔</p>
            <p>Total Score: {score}</p>
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {isWinGameModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p className="message">You won the game! 🎉</p>
            <p>Total Score: {score}</p>
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
