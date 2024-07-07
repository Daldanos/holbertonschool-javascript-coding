#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) throw err;
        console.log(`Webpage content saved to ${filePath}`);
    });
  } else {
    console.log('Error fetching webpage content');
  }
});
