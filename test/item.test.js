/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { item } = require('../index');
const response = require('../fixtures/item');

describe('Item', () => {
  const id = 121003;

  nock(config.baseurl)
    .get(`/${config.endpoints.item}/${id}.json`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get an item', () => {
    return item(id).then(response => {
      assert.isObject(response);
      assert.strictEqual(response.data.id, id);
      assert.strictEqual(response.data.type, 'story');
    });
  });
});
