import './index.css'

const WinOrLoseCard = props => {
  const {isWin, onPlayAgain, totalScore} = props
  return (
    <div className={`card ${isWin ? 'win' : 'lose'}`}>
      {isWin ? (
        <div className="message">
          <div>
            <h1 className="heading">You Won</h1>
            <h1 className="heading">Best Score</h1>
            <p className="score">12/12</p>
            <button
              type="button"
              className="play-again-button"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="logo"
          />
        </div>
      ) : (
        <div className="message">
          <div>
            <h1 className="heading">You Lose</h1>
            <h1 className="heading">Best Score</h1>
            <p className="score">{totalScore}/12</p>
            <button
              type="button"
              className="play-again-button"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="logo"
            className="logo"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
