/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { maxitem } = require('../index');
const response = require('../fixtures/maxitem');

describe('Max item', () => {
  nock(config.baseurl)
    .get(`/${config.endpoints.maxitem}`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get a max item', () => {
    return maxitem().then(response => {
      assert.isNumber(response.data);
    });
  });
});
