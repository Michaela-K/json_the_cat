const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  //The first (error) parameter will allow the caller to check and handle error situations easily.
  let url = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`type not found`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
