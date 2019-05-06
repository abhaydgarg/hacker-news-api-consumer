/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { askstories } = require('../index');
const response = require('../fixtures/askstories');

describe('Ask stories', () => {
  nock(config.baseurl)
    .get(`/${config.endpoints.askstories}`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get ask stories', () => {
    return askstories().then(response => {
      assert.isArray(response.data);
      assert.isNotEmpty(response.data);
    });
  });
});
