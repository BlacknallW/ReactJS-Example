import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }
  return (
    <div className="App">
      <Todos />
      </div>
  );
}

export default App;
