import React, { useState } from 'react'

const NoteForm = ({ onAddNote, editingNote, onUpdateNote, onCancelEdit }) => {
  const [title, setTitle] = useState(editingNote?.title || '')
  const [content, setContent] = useState(editingNote?.content || '')
  const [category, setCategory] = useState(editingNote?.category || 'General')

  const categories = ['General', 'Work', 'Personal', 'Ideas', 'Todo']

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim()) {
      alert('Please fill in all fields')
      return
    }

    if (editingNote) {
      onUpdateNote({
        ...editingNote,
        title,
        content,
        category,
        updatedAt: new Date().toISOString()
      })
      onCancelEdit()
    } else {
      onAddNote({
        id: Date.now(),
        title,
        content,
        category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    }

    setTitle('')
    setContent('')
    setCategory('General')
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>{editingNote ? 'Edit Note' : 'Create New Note'}</h2>
      
      <input
        type="text"
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />

      <textarea
        placeholder="Note content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="form-textarea"
        rows="5"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="form-select"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">
          {editingNote ? 'Update Note' : 'Add Note'}
        </button>
        {editingNote && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default NoteForm