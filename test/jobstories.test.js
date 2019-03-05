/* eslint-env mocha */
const assert = require('chai').assert;
const nock = require('nock');

const config = require('../config');
const { jobstories } = require('../index');
const response = require('../fixtures/jobstories');

describe('Job stories', () => {
  nock(config.baseurl)
    .get(`/${config.endpoints.jobstories}`) // Need to append `/` to match the url.
    .reply(200, response);

  it('should get job stories', () => {
    return jobstories().then(response => {
      assert.isArray(response.data);
      assert.isNotEmpty(response.data);
    });
  });
});
