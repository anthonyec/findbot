const { expect } = require('chai');

const template = require('./');

describe('Templates helper', () => {
  it('renders template', () => {
    return template('test', { foo: 1, bar: 2 }).then((output) => {
      expect(output).to.be.equal('1This template is a test!2\n');
    });
  });

  it('can handle no data being passed', () => {
    return template('test').then((output) => {
      expect(output).to.be.equal('This template is a test!\n');
    });
  });

  xit('errors when no template is found', () => {
    template('does_not_exist');
  });
});
