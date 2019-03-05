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
item('121003').then(data => {
  // ...data
}).catch(error => {
  // ...error
});

// Get top stories
topstories().then(data => {
  // ...data
}).catch(error => {
  // ...error
});
```

## Methods

> Every method returns promise.

* Item - `item(<id:string>)`
* User - `user(<id:string>)`
* Max item - `maxitem()`
* Top stories - `topstories()`
* New stories - `newstories()`
* Best stories - `beststories()`
* Ask stories - `askstories()`
* Show stories - `showstories()`
* Job stories - `jobstories()`

## Data schema

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
