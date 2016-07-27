import later from 'later'
import { r, r_internal } from '../db'

const todos = [
  'Getting started with React.',
  'Getting to know Redux.',
  'Redux Observable brings it all together.',
  'Got to clean up this',
  'Add authentication.',
  'Create a short tutorial.',
  'Upgrade to horizon 2 at first light.',
  'Creat a React Native Boilerplate as well.',
  'Thank Lovli.js.',
  'Thank Redux Observables particularly JayPhelps.',
  'Done with GoT Season 6.',
  'Now to House of Cards.',
  'Spend some time with the Wife.',
  'Help with the young boy.',
  'Play more. Work can wait.',
  'Go to church!'
]

const createRandomTodo = () => {
  const rand = Math.round(Math.random() * todos.length - 1, 0)
  r_internal.table('collections').get('todos').run()
  .then(function(result) {
    r.table(result.table).insert({ text: todos[rand], $hz_v$: 1 }).run()
  })
}

const every1minutes = later.parse.text('every 1 minute')

later.setInterval(createRandomTodo, every1minutes)
