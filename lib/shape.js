//Parent shape class that extends circle, square, and triangle
class Shape{
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
}
};

module.exports = Shape;