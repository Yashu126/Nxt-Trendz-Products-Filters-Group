import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onInput,
    searchInput,
    resetPage,
    enterSearchInput,
    changeCategory,
    changeRating,
  } = props

  const onSearch = e => {
    onInput(e.target.value)
  }

  const renderCategories = () => (
    <>
      <h1 className="category-rating-heading">Category</h1>
      <div className="category-ul">
        {categoryOptions.map(eachCategory => {
          const onChangeCategory = () => {
            changeCategory(eachCategory.categoryId)
          }
          return (
            <p
              onClick={onChangeCategory}
              className="category-li"
              key={eachCategory.categoryId}
            >
              {eachCategory.name}
            </p>
          )
        })}
      </div>
    </>
  )

  const renderRatings = () => (
    <>
      <h1 className="category-rating-heading">Ratings</h1>
      <div className="category-ul">
        {ratingsList.map(eachRating => {
          const onChangeRating = () => {
            changeRating(eachRating.ratingId)
          }
          return (
            <p
              onClick={onChangeRating}
              className="rating-li"
              key={eachRating.ratingId}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                width="40%"
              />
              <p className="up">& up</p>
            </p>
          )
        })}
      </div>
    </>
  )

  const onEnter = e => {
    if (e.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onClear = () => {
    resetPage()
  }

  return (
    <div className="filters-group-container">
      <div className="search-con">
        <input
          className="search-input"
          placeholder="Search"
          type="search"
          value={searchInput}
          onChange={onSearch}
          onKeyDown={onEnter}
        />
        <BsSearch className="search-icon" />
      </div>
      {renderCategories()}
      {renderRatings()}
      <button onClick={onClear} className="clear-btn" type="button">
        Clear Filters
      </button>
      {/* Replace this element with your code */}
    </div>
  )
}
export default FiltersGroup
