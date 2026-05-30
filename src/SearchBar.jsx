import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'General', 'Work', 'Personal', 'Ideas', 'Todo']

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search notes by title or content..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="category-filter"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar