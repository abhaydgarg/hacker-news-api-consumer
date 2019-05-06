/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { beststories } = require('../index');
const response = require('../fixtures/beststories');

describe('Best stories', () => {
  nock(config.baseurl)
    .get(`/${config.endpoints.beststories}`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get best stories', () => {
    return beststories().then(response => {
      assert.isArray(response.data);
      assert.isNotEmpty(response.data);
    });
  });
});
