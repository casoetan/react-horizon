import later from 'later'
import { r, r_internal } from '../db'

/**
 * Delete all todos every 10 minutes.
 */

const every5minutes = later.parse.text('every 5 minutes')

const deleteTodos = () => {
  r_internal.table('collections').get('todos').run()
  .then(function(result) {
    r.table(result.table).delete().run()
  })
}

later.setInterval(deleteTodos, every5minutes)
