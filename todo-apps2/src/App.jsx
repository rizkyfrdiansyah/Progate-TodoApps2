import React, { useState } from 'react'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false, // Menganti nilai awal ke true
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  console.log(todos)

  // Definisikan toggleCompleted di sini
  const toggleCompleted = (todoId) => {
    const upatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(upatedTodos)
    
    console.log('toggleCompleted function is called')
    console.log(todoId)
  }
  

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* Gunakan method map di sini */}
      {/* {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })} */}

      {/* Teruskan function toggleCompleted ke component Todos */}
      <Todos todos={todos} toggleCompleted={toggleCompleted} /> {/* Menampilkan component Todos */}
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App