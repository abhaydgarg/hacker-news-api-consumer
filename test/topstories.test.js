/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { topstories } = require('../index');
const response = require('../fixtures/topstories');

describe('Top stories', () => {
  nock(config.baseurl)
    .get(`/${config.endpoints.topstories}`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get top stories', () => {
    return topstories().then(response => {
      assert.isArray(response.data);
      assert.isNotEmpty(response.data);
    });
  });
});
