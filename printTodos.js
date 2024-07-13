import { fetchTodos } from './fetchTodos.js'

/**
 * Prints the list of to-dos to the console.
 * @returns {Promise<void>} A promise that resolves when the to-dos have been printed.
 */
async function printTodos() {
  const todos = await fetchTodos()

  todos.forEach(todo => {
    console.log(`- ${todo.title}\n`)
  })
}

export { printTodos }
