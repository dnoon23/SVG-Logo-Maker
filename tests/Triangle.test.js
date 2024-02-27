//Test to check if triangle is being made correctly
const Triangle = require('../lib/triangle');

describe('Traingle', () => {
  it('Should return a blue triangle with \'svg\' in black on it', () => {
    const triangle = new Triangle('blue', 'svg', 'black');
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
    <polygon points = '150, 18 244, 182 56, 182' fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">svg</text>
    </svg>`);
  });
});