module.exports = (x, y, z) ->
  n = Math.PI - 2 * Math.PI * y / Math.pow(2, z)
  [
    x / Math.pow(2, z) * 360 - 180
    180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))
  ]