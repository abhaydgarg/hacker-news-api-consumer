/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { newstories } = require('../index');
const response = require('../fixtures/newstories');

describe('New stories', () => {
  nock(config.baseurl)
    .get(`/${config.endpoints.newstories}`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get new stories', () => {
    return newstories().then(response => {
      assert.isArray(response.data);
      assert.isNotEmpty(response.data);
    });
  });
});
