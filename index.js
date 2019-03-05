const axios = require('axios');
const { isObject, isNumber, isArray } = require('@abhaydgarg/is');

const config = require('./config');
const errorHandler = require('./error-handler');

const API = axios.create({
  baseURL: config.baseurl,
  timeout: config.timeout,
  responseType: config.responseType
});

/**
 * Items- Stories, comments, jobs, Ask HNs and even polls are just items.
 * They're identified by their ids, which are unique integers.
 * https://github.com/HackerNews/API#items
 *
 * @async
 * @param {string} id
 * @return {Promise<object>}
 */
module.exports.item = async (id) => {
  try {
    const response = await API.get(`${config.endpoints.item}/${id}.json`);
    if (isObject(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown item\'s identifier');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * Users are identified by case-sensitive ids.
 * Only users that have public activity (comments or story submissions)
 * on the site are available through the API.
 * https://github.com/HackerNews/API#users
 *
 * @async
 * @param {string} id
 * @return {Promise<object>}
 */

module.exports.user = async (id) => {
  try {
    const response = await API.get(`${config.endpoints.user}/${id}.json`);
    if (isObject(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown user\'s identifier');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * The current largest item id.
 * https://github.com/HackerNews/API#max-item-id
 *
 * @async
 * @return {Promise<object>}
 */
module.exports.maxitem = async () => {
  try {
    const response = await API.get(config.endpoints.maxitem);
    if (isNumber(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown error');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * Up to 500 top stories.
 * https://github.com/HackerNews/API#new-top-and-best-stories
 *
 * @async
 * @return {Promise<object>}
 */
module.exports.topstories = async () => {
  try {
    const response = await API.get(config.endpoints.topstories);
    if (isArray(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown error');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * Up to 500 news stories.
 * https://github.com/HackerNews/API#new-top-and-best-stories
 *
 * @async
 * @return {Promise<object>}
 */
module.exports.newstories = async () => {
  try {
    const response = await API.get(config.endpoints.newstories);
    if (isArray(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown error');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * Up to 500 best stories.
 * https://github.com/HackerNews/API#new-top-and-best-stories
 *
 * @async
 * @return {Promise<object>}
 */
module.exports.beststories = async () => {
  try {
    const response = await API.get(config.endpoints.beststories);
    if (isArray(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown error');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * Up to 200 of the latest Ask HN.
 * https://github.com/HackerNews/API#ask-show-and-job-stories
 *
 * @async
 * @return {Promise<object>}
 */
module.exports.askstories = async () => {
  try {
    const response = await API.get(config.endpoints.askstories);
    if (isArray(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown error');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * Up to 200 of the latest Show HN.
 * https://github.com/HackerNews/API#ask-show-and-job-stories
 *
 * @async
 * @return {Promise<object>}
 */
module.exports.showstories = async () => {
  try {
    const response = await API.get(config.endpoints.showstories);
    if (isArray(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown error');
  } catch (error) {
    return errorHandler(error);
  }
};

/**
 * Up to 200 of the latest job stories.
 * https://github.com/HackerNews/API#ask-show-and-job-stories
 *
 * @async
 * @return {Promise<object>}
 */
module.exports.jobstories = async () => {
  try {
    const response = await API.get(config.endpoints.jobstories);
    if (isArray(response.data)) {
      return {
        status: response.status,
        data: response.data
      };
    }
    throw new Error('Unknown error');
  } catch (error) {
    return errorHandler(error);
  }
};
