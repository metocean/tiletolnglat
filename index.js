// Generated by CoffeeScript 1.9.2
module.exports = function(x, y, z) {
  var n;
  n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
  return [x / Math.pow(2, z) * 360 - 180, 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))];
};
