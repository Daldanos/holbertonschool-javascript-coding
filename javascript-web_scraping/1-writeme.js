#!/usr/bin/node

const fs = require('fs');

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote to ${filePath}`);
    }
  });
}
