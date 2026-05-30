import React from 'react'
import NoteCard from './NoteCard'

const NoteList = ({ notes, onEdit, onDelete }) => {
  if (notes.length === 0) {
    return (
      <div className="notes-list empty">
        <p>No notes found. Create your first note!</p>
      </div>
    )
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default NoteList