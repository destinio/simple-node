import { logTodos } from './log.js'

/**
 * Fetches the list of to-dos.
 *
 * @returns {Promise<Todo[]>} A promise that resolves to an array of tasks.
 */
async function fetchTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await response.json()

  logTodos(todos)

  return todos
}

export { fetchTodos }
