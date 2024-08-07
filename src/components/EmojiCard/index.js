// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiData, onClickImage} = props
  const {emojiName, emojiUrl, id} = emojiData

  const handleClick = () => {
    onClickImage(id)
  }
  return (
    <div className="emoji-card">
      <img
        alt={emojiName}
        src={emojiUrl}
        className="emoji-image"
        onClick={handleClick}
      />
    </div>
  )
}

export default EmojiCard
