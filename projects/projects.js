const FuzzySearch = require('fuzzysearch-js');
const levenshteinFS = require('fuzzysearch-js/js/modules/LevenshteinFS');
const indexOfFS = require('fuzzysearch-js/js/modules/IndexOfFS');
const wordCountFS = require('fuzzysearch-js/js/modules/WordCountFS');

let projects = require('./data/index.json');

const searchPhrase = /(search for|find|search|look for|hunt for|\:mag\:)\s/;

const data = projects.map((project) => {
  return project.name;
});

const fuzzySearch = new FuzzySearch(data, { 'minimumScore': 300 });
fuzzySearch.addModule(levenshteinFS({'maxDistanceTolerance': 3, 'factor': 3}));
fuzzySearch.addModule(indexOfFS({'minTermLength': 3, 'maxIterations': 500, 'factor': 3}));
fuzzySearch.addModule(wordCountFS({'maxWordTolerance': 3, 'factor': 1}));

exports.search = function(query) {
  let results =  fuzzySearch.search(query);

  if (!results) {
    return [];
  }

  if (results.length > 5) {
    results = results.slice(0, 5);
  }

  const projectResults = results.map((result) => {
    return projects.find((project) => {
      return project.name === result.value;
    });
  });

  return projectResults.filter((result => result.depth !== 0));
}

exports.reloadIndex = function() {
  projects = require('./index.json');
}

exports.index = projects;
