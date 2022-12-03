import Todo from "./Todo";

import styles from './TodoList.module.css'

function TodoList(props) {
  const { todos, deleteTodo, toggleTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList;