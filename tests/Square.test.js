const Square = require('../lib/square');

describe('Square', () => {
  it('Should return a red sqare with \'svg\' in purple on it', () => {
    const square = new Square('red', 'svg', 'purple');
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">svg</text>
    </svg>`);
  });
});