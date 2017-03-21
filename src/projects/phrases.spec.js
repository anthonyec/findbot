const { expect } = require('chai');
const faker = require('faker');

const phrases = require('./phrases');

describe('Search phrases', () => {
  it('matches any words', () => {
    const match = ('thing').match(phrases.search);

    expect(match[0]).not.be.equal('');
  });

  it('matches when a "find" keyword is used', () => {
    const setence = faker.lorem.sentence();
    const match = (`find ${setence}`).match(phrases.keyword);

    expect(match[0]).not.be.equal('');
  });
});
