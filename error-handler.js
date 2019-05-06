const { isObject } = require('@abhaydgarg/is');

module.exports = function (error) {
  if (isObject(error.response)) {
    return {
      status: error.response.status,
      error: error.response.data.error
    };
  }
  return {
    status: null,
    error: error.message
  };
};
