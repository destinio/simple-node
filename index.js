#!/usr/bin/env node
import { printTodos } from './printTodos.js'

const arg = process.argv[2]

if (arg === 'todos') {
  printTodos()
} else {
  console.error('Unknown command. Please use "todos" as the first argument.')
  process.exit(1)
}
