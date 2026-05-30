# 📝 Note App

A beautiful, fully-functional note-taking app built with **React** and **Vite**. Create, read, update, and delete notes with ease. Features include search functionality, category filtering, and persistent local storage.

## ✨ Features

- **📌 Create Notes** - Add new notes with title, content, and category
- **📖 Read Notes** - View all notes in a responsive grid layout
- **✏️ Update Notes** - Edit existing notes inline
- **🗑️ Delete Notes** - Remove notes with confirmation
- **🔍 Search** - Filter notes by title or content in real-time
- **📂 Categories** - Organize notes (General, Work, Personal, Ideas, Todo)
- **🏷️ Filter by Category** - View notes from specific categories
- **💾 Persistent Storage** - All notes saved to localStorage automatically
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 🎨 UI Highlights

- Modern gradient header
- Smooth hover effects and transitions
- Clean, professional color scheme
- Sticky form section for easy note creation
- Responsive grid layout
- Beautiful emoji icons for actions

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sadiaather/note-app.git
   cd note-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your app

## 📦 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
note-app/
├── src/
│   ├── App.jsx           # Main app component with state management
│   ├── App.css           # Global styles
│   ├── NoteForm.jsx      # Component for creating/editing notes
│   ├── NoteList.jsx      # Component for displaying list of notes
│   ├── NoteCard.jsx      # Individual note card component
│   ├── SearchBar.jsx     # Search and filter component
│   ├── main.jsx          # React entry point
│   └── index.css         # Base styles
├── public/               # Static assets
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── index.html            # HTML entry point
```

## 💾 Data Persistence

Your notes are automatically saved to browser's **localStorage**. This means:
- Notes persist across browser sessions
- No backend server required
- Data is stored locally on your device

## 🎯 Component Overview

### App.jsx
- Main component managing all state
- Handles CRUD operations for notes
- Manages search and filter functionality
- Loads/saves notes from localStorage

### NoteForm.jsx
- Form for creating and editing notes
- Title, content, and category inputs
- Form validation

### NoteList.jsx
- Displays grid of notes
- Shows empty state when no notes exist

### NoteCard.jsx
- Individual note display
- Edit and delete buttons
- Category badge
- Formatted date display

### SearchBar.jsx
- Text search input
- Category filter dropdown
- Real-time filtering

## 🎨 Color Scheme

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #ec4899 (Pink)
- **Success**: #10b981 (Green)
- **Danger**: #ef4444 (Red)
- **Background**: #f8fafc (Slate)

## 🔧 Technologies Used

- **React 19** - UI library
- **Vite 8** - Build tool
- **CSS3** - Styling with CSS variables and media queries
- **JavaScript (ES6+)** - Modern JavaScript

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sadia Ather** - [GitHub](https://github.com/sadiaather)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork this project and submit pull requests.

---

**Made with ❤️ using React & Vite**
