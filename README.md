# Hacker news API consumer

Hacker news [API](https://github.com/HackerNews/API) consumer.

## Consume endpoints

* item
* user
* maxitem
* topstories
* newstories
* beststories
* askstories
* showstories
* jobstories

## Installation

```bash
npm install --save hacker-news-api-consumer
```

## Usage

```javascript
const { item, topstories } = require('hacker-news-api-consumer');

// Get item
item(121003).then(response => {
  // ...response object
}).catch(error => {
  // ...error object
});

// Get top stories
topstories().then(response => {
  // ...response object
}).catch(error => {
  // ...error object
});
```

## Methods

> Every method returns promise.

* Item - `item(<id:number>)`
* User - `user(<id:string>)`
* Max item - `maxitem()`
* Top stories - `topstories()`
* New stories - `newstories()`
* Best stories - `beststories()`
* Ask stories - `askstories()`
* Show stories - `showstories()`
* Job stories - `jobstories()`

## Response schema

```javascript
{
  status: '<number>',
  data: '<any>'
}
```

## Error schema

```javascript
{
  status: '<number>',
  error: '<string>'
}
```
