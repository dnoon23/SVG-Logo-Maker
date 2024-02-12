const Circle = require('../lib/circle');

describe('Circle', () => {
  it('Should return a green circle with \'svg\' in white on it', () => {
    const circle = new Circle('green', 'svg', 'white');
    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">svg</text>
    </svg>`);
  });
});