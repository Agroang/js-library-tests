// https://javascript.plainenglish.io/27-essential-one-line-javascript-functions-used-by-developers-daily-2cda9826700e



function stripHtml(html) {
  const DOMParser = require('xmldom').DOMParser;
  const parser = new DOMParser()
  return parser.parseFromString(html, 'text/html').body.textContent || '';
  // cannot currently test as .textContent throws an error when it's not HTML
}

module.exports = stripHtml;
