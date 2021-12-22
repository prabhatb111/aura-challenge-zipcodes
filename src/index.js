const { find } = require('./service');

// lambda-like handler function

module.exports.handler = async event => {

  const filters = (event.queryStringParameters) ? event.queryStringParameters : {};
  const items = find(filters);
  console.log('items----------',items.length)
  const response = {
    statusCode: 200,
    body: items
  };
  return response;

};
