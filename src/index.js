const { find } = require('./service');
const { schema } = require('./validation');
// lambda-like handler function

module.exports.handler = async event => {

  const httpMethod = (event.httpMethod) ? event.httpMethod : 'GET';
  const filters = (httpMethod == 'POST' && event.body) ? event.body : (event.queryStringParameters) ? event.queryStringParameters : {};
  const { error } = schema.validate(filters);
  if (error)
    return error;

  const items = find(filters);
  console.log('items----------', items.length)
  const response = {
    statusCode: 200,
    body: items
  };
  return response;



};
