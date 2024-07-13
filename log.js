import fs from 'fs/promises'

/**
 * Logs the todos to a log file todos.log
 *
 * @param {Todo[]} todos
 */
async function logTodos(todos) {
  const formatedTodos = todos.map(todo => `- ${todo.title}`).join('\n')

  await fs.writeFile('todos.log', formatedTodos)
}

export { logTodos }
