import React from 'react'

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  // Mengganti deklarasi fungsi getTodoTitleStyle dengan ternary
  const getTodoTitleStyle = () => {
    return {textDecoration: todo.completed ? 'line-through' : 'none'}
  }
  
  // const getTodoTitleStyle = () => {
  //   if (todo.completed === true) {
  //     return {textDecoration: 'line-through'}
  //   } else {
  //     return {textDecoration: 'none'}
  //   }
  // }

    return (
      <div style={styles.todoItem}>
        <input 
        type="checkbox" 
        style={styles.checkbox}
        //  Memberikan id dari todo sebagai argument
        onChange={() => toggleCompleted(todo.id)}
        />
        <p style={getTodoTitleStyle()}>{todo.title}</p>
        {/* Tambahkan sebuah button di sini */}
        <button style={styles.button} onClick={() => deleteTodo(todo.id)}>x</button>
      </div>
    )
  }
  
  const styles = {
    todoItem: {
      border: '2px solid #000',
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
    },
    checkbox: {
      height: '18px',
      width: '18px',
    },
    button: {
      backgroundColor: '#BB0000',
      color: '#fff',
      height: '30px',
      width: '30px',
      borderRadius: '100%',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
  }
  

export default TodoItem