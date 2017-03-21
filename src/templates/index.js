const fs = require('fs');
const path = require('path');

const handlebars = require('handlebars');

module.exports = (fileName, data = {}) => {
  return new Promise((resolve) => {
    const resolvedPath = path.resolve(__dirname, fileName);

    fs.readFile(`${resolvedPath}.hbs`, (err, file) => {
      if (!err) {
        const template = handlebars.compile(file.toString());
        const rendered = template(data);

        resolve(rendered);
      } else {
        throw new Error(err);
      }
    });
  });
};
