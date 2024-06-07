import React from 'react'

const TodoItem = ({ todo, toggleCompleted }) => {
  // Menerima function toggleCompleted sebagai sebuah prop
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return {textDecoration: 'line-through'}
    } else {
      return {textDecoration: 'none'}
    }
  }

  // Definisikan function getTodoTitleStyle di sini
  // const getTodoTitleStyle = () => {
  //   if (todo.completed === true) {
  //     return {textDecoration: 'line-through'}
  //   } else {
  //     return {textDecoration: 'none'}
  //   }
  // }

  // Definisikan function toggleCompleted di sini
  // const toggleCompleted = () => {
  //   console.log('toggleCompleted function is called')
  // }


  // Code dibawah adalah error!
  // const todoTitleStyle = {
  //   if (todo.completed === true) {
  //     textDecoration: 'line-through'
  //   } else {
  //     textDecoration: 'none'
  //   }
  // }

    return (
      <div style={styles.todoItem}>
        {/* Menambahkan checkbox */}
        <input 
        type="checkbox" 
        style={styles.checkbox}
        //  Memberikan id dari todo sebagai argument
        // Jalankan function toggleCompleted ketika checkbox di-klik
        onChange={() => toggleCompleted(todo.id)}
        />
        {/* Panggil function getTodoTitleStyle */}
        <p style={getTodoTitleStyle()}>{todo.title}</p>
      </div>
    )
  }
  
  const styles = {
    todoItem: {
      border: '2px solid #000',
      fontSize: '24px',
      // Tambahkan styles di bawah ini
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Tambahkan styles di bawah ini
    checkbox: {
      marginRight: '10px',
      height: '18px',
      width: '18px',
    },
  }
  

export default TodoItem