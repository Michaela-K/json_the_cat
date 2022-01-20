const request = require("request");


  let breed = process.argv[2];
  let url = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;
  request(url, (error, response, body) => {
    if (!error && response === 200) {   
      console.log('error:', error);
    }
    if(!`${breed}`){
      console.log('error:', error);
      console.log('please enter valid kitty type!');
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
