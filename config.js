module.exports = {
  baseurl: 'https://hacker-news.firebaseio.com/v0/',
  timeout: 2500,
  responseType: 'json',
  endpoints: {
    item: 'item',
    user: 'user',
    maxitem: 'maxitem.json',
    topstories: 'topstories.json',
    newstories: 'newstories.json',
    beststories: 'beststories.json',
    askstories: 'askstories.json',
    showstories: 'showstories.json',
    jobstories: 'jobstories.json'
  }
};
