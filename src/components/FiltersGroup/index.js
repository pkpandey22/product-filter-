import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    searchDataBase,
    categoryOptions,
    ratingsList,
    filterClick,
    ratingClick,
    clearFilters,
    changeInput,
    category,
    rating,
    titleSearch,
  } = props

  const searchBase = event => {
    if (event.key === 'Enter') {
      searchDataBase()
    }
  }

  const searchInput = event => {
    changeInput(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="searchbar-holder">
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          onChange={searchInput}
          onKeyDown={searchBase}
          value={titleSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(each => (
          <li key={each.categoryId} className="category-item">
            <button
              type="button"
              className={`category-btn ${
                each.categoryId === category ? 'add-color' : ''
              }`}
              onClick={() => filterClick(each.categoryId)}
            >
              <p>{each.name}</p>
            </button>
          </li>
        ))}
      </ul>

      <h1 className="category">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(each => (
          <li key={each.ratingId} className="category-item">
            <button
              type="button"
              className={`rating-holder ${
                each.ratingId === rating ? 'add-color' : ''
              }`}
              onClick={() => ratingClick(each.ratingId)}
            >
              <img
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
                className="rating-image"
              />
              <span className="up">&up</span>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
