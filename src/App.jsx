import React, { useState, useEffect } from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import SearchBar from './SearchBar'
import './App.css'

const App = () => {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [editingNote, setEditingNote] = useState(null)

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes')
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes))
      } catch (error) {
        console.error('Error loading notes:', error)
      }
    }
  }, [])

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (newNote) => {
    setNotes([newNote, ...notes])
  }

  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    ))
  }

  const deleteNote = (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter((note) => note.id !== noteId))
    }
  }

  // Filter notes based on search term and category
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' || note.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Sadia's Notes</h1>
        <p>Keep track of your thoughts and ideas</p>
      </header>

      <main className="app-main">
        <div className="form-section">
          <NoteForm
            onAddNote={addNote}
            editingNote={editingNote}
            onUpdateNote={updateNote}
            onCancelEdit={() => setEditingNote(null)}
          />
        </div>

        <div className="list-section">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="notes-count">
            {filteredNotes.length > 0 && (
              <p>{filteredNotes.length} note{filteredNotes.length !== 1 ? 's' : ''} found</p>
            )}
          </div>

          <NoteList
            notes={filteredNotes}
            onEdit={setEditingNote}
            onDelete={deleteNote}
          />
        </div>
      </main>
    </div>
  )
}

export default App