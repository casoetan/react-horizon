import rethinkdbdash from 'rethinkdbdash'
import config from '../../config/db'

export const r = rethinkdbdash(config)

const config_internal = Object.assign({}, config) // eslint-disable-line
config_internal.db = `${config.db}_internal`
export const r_internal = rethinkdbdash(config_internal) // eslint-disable-line
