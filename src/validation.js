const Joi = require('joi');

const schema = Joi.object({
    zip: Joi.number(),
    type: Joi.string(),
    primary_city: Joi.string(),
    acceptable_cities: Joi.any(),
    unacceptable_cities: Joi.any(),
    state: Joi.string(),
    county: Joi.string(),
    timezone: Joi.any(),
    area_codes: Joi.any(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    country: Joi.string(),
    estimated_population: Joi.number(),
    radius: Joi.number(),
});
module.exports = {schema}
