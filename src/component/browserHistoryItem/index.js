import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    onDelete(id)
  }
  return (
    <li>
      <p className="time">{timeAccessed}</p>
      <div className="history-item-container">
        <img className="domain-logo" src={logoUrl} alt="domain logo" />
        <div className="domain-title-container">
          <p>{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          className="delete-icon"
          type="button"
          onClick={onDeleteItem}
          id="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
