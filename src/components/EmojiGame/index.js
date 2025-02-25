import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    checkedArray: [],
    lossView: false,
    winView: false,
  }

  shuffleEmojisList = () => {
    const shuffledList = [...emojisList].sort(() => Math.random() - 0.5)
    return shuffledList
  }

  onClickImage = id => {
    const {checkedArray, score} = this.state
    if (score === 11) {
      this.setState({
        totalScore: 12,
        winView: true,
        lossView: false,
        score: 0,
      })
    } else if (checkedArray.includes(id)) {
      this.setState(prevState => ({
        totalScore: Math.max(prevState.totalScore, prevState.score),
        score: 0,
        checkedArray: [],
        lossView: true,
        winView: false,
      }))
    } else {
      this.setState(prevState => ({
        checkedArray: [...prevState.checkedArray, id],
        score: prevState.score + 1,
        lossView: false,
        winView: false,
      }))
    }
  }

  handlePlayAgain = () => {
    this.setState({
      score: 0,
      checkedArray: [],
      lossView: false,
      winView: false,
    })
  }

  render() {
    const {score, totalScore, lossView, winView} = this.state
    const shuffledEmojisList = this.shuffleEmojisList()

    return (
      <div className="bg-container">
        <NavBar score={score} totalScore={totalScore} />
        <div className="emoji-card-container">
          {winView || lossView ? (
            <WinOrLoseCard
              isWin={winView}
              totalScore={totalScore}
              onPlayAgain={this.handlePlayAgain}
            />
          ) : (
            shuffledEmojisList.map(each => (
              <EmojiCard
                onClickImage={this.onClickImage}
                emojiData={each}
                key={each.id}
              />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
