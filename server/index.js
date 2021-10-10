const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const Parser = require('rss-parser')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/news', async (req, res) => {
  const parser = new Parser();
  const feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml')

  let items = [];
  await Promise.all(feed.items.map(async (currentItem) => {
    items.push(currentItem);
  }))

  res.json(items)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})