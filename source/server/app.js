import path from 'path'
import fs from 'fs'
import https from 'https'
import express from 'express'
import horizon from '@horizon/server'
import devProps from '../../config/webpack/devProps'
import config from '../../config/page'

import './auto'

const app = express()

app.use('/static', express.static(path.join(process.cwd(), '.build')))

/**
 * @TODO move the html out of the server dir
 */
const host = process.env.NODE_ENV === 'production' ? '' : `https://127.0.0.1:${devProps.webpackPort}`
const bundle = `${host}/static/client.bundle.js`
const styles = `${host}/static/styles.css`

app.use('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>${config.title}</title>
        <link rel="stylesheet" type="text/css" href="${styles}" />
      </head>
      <body>
        <div id='root'></div>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        <script src="${bundle}"></script>
      </body>
    </html>`)
})

const run = () => {
  const port = process.env.PORT || config.port

  const options = {
    key: fs.readFileSync(__dirname + '/horizon-key.pem'),
    cert: fs.readFileSync(__dirname + '/horizon-cert.pem')
  };

  const secureServer = https
    .createServer(options, app)
    .listen(port, err => {
      err ? console.log(err) : null // eslint-disable-line
      console.log(`Express listening at https://localhost:${port}`) // eslint-disable-line
    })

  const horizonServer = horizon(secureServer, {
    auto_create_collection: true,
    auto_create_index: true,
    project_name: 'react_horizon',
    permissions: false, // waiting for additions to permission system atm
    auth: {
      // success_redirect: '/user/account',
      allow_anonymous: false,
      allow_unauthenticated: true,
      token_secret: config.token_secret
    }
  })

  // TODO: Add authentication
  // horizonServer.add_auth_provider(
  //   horizon.auth.google, require('../../config/oauth').google
  // )
  // horizonServer.add_auth_provider(
  //   horizon.auth.facebook, require('../../config/oauth').facebook
  // )
}

export default {
  run
}
