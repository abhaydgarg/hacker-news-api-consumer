/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { showstories } = require('../index');
const response = require('../fixtures/showstories');

describe('Show stories', () => {
  nock(config.baseurl)
    .get(`/${config.endpoints.showstories}`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get show stories', () => {
    return showstories().then(response => {
      assert.isArray(response.data);
      assert.isNotEmpty(response.data);
    });
  });
});
