/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { user } = require('../index');
const response = require('../fixtures/user');

describe('User', () => {
  const id = 'jl';

  nock(config.baseurl)
    .get(`/${config.endpoints.user}/${id}.json`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get a user', () => {
    return user(id).then(response => {
      assert.isObject(response);
      assert.strictEqual(response.data.id, id);
    });
  });
});
