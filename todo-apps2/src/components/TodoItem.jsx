import React, { useContext } from 'react'
import { TodoContext } from '../App'

const TodoItem = ({ todo }) => {
  const {toggleCompleted, deleteTodo} = useContext(TodoContext)

  const getTodoTitleStyle = () => {
    return {textDecoration: todo.completed ? 'line-through' : 'none'}
  }
  
    return (
      <div style={styles.todoItem}>
        <input 
          type="checkbox" 
          style={styles.checkbox}
          onChange={() => toggleCompleted(todo.id)}
        />
        <p style={getTodoTitleStyle()}>{todo.title}</p>
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