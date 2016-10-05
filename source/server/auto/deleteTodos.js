import later from 'later'
import { r } from '../db'

/**
 * Delete all todos every 10 minutes.
 */

const every5minutes = later.parse.text('every 5 minutes')

const deleteTodos = () => {
  r.table('hz_collections').get('todos').run()
  .then(function(result) {
    r.table('todos').delete().run()
  })
}

later.setInterval(deleteTodos, every5minutes)
