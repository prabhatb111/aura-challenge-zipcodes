const { handler } = require("./index");
const data = require('./data.json');
const { find } = require('./service');
describe("basic tests", () => {
  test("handler function exists", () => {
    expect(typeof handler).toBe("function");
  });
});

describe("Filter", () => {
  test("it should filter by zip", () => {
    const input = { "zip": "01002"}
    const output = [{
      "zip": "01002",
      "type": "STANDARD",
      "primary_city": "Amherst",
      "acceptable_cities": "Cushman, Pelham",
      "unacceptable_cities": "South Amherst",
      "state": "MA",
      "county": "Hampshire County",
      "timezone": "America/New_York",
      "area_codes": "413",
      "latitude": "42.37",
      "longitude": "-72.52",
      "country": "US",
      "estimated_population": "16532"
    }];
    expect(find(input)).toEqual(output);
  });
});
