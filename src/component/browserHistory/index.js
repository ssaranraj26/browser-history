import {Component} from 'react'

import HistoryItem from '../browserHistoryItem/index'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {historyItems} = this.props
    this.setState({historyList: historyItems})
  }

  searchResults = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {historyList} = this.state
    const newList = historyList.filter(each => each.id !== id)
    this.setState({historyList: newList})
  }

  render() {
    const {searchInput, historyList} = this.state

    const filteredResults = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="header">
          <img
            className="history-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              className="input"
              placeholder="Search History"
              type="search"
              value={searchInput}
              onChange={this.searchResults}
            />
          </div>
        </div>
        {filteredResults.length > 0 && (
          <ul className="histories-container">
            {filteredResults.map(each => (
              <HistoryItem
                key={each.id}
                onDelete={this.onDelete}
                historyDetails={each}
              />
            ))}
          </ul>
        )}
        {!(filteredResults.length > 0) && <p>There is no history to show</p>}
      </div>
    )
  }
}
export default BrowserHistory
