//var express = require('express');

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Counter from './Counter'

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send(
    ReactDOMServer.renderToString(
      <div>
        <div id='app'>
          <Counter />
        </div>
        <script src='client.js' />
      </div>
    )
  )
})

app.listen(3000)
