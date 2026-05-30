import React from 'react'

const NoteCard = ({ note, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="note-card">
      <div className="note-header">
        <h3>{note.title}</h3>
        <span className="note-category">{note.category}</span>
      </div>

      <p className="note-content">{note.content}</p>

      <div className="note-footer">
        <small className="note-date">
          {formatDate(note.updatedAt)}
        </small>
        <div className="note-actions">
          <button
            className="btn btn-small btn-edit"
            onClick={() => onEdit(note)}
            title="Edit note"
          >
            ✏️
          </button>
          <button
            className="btn btn-small btn-delete"
            onClick={() => onDelete(note.id)}
            title="Delete note"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard