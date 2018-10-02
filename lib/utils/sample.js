import getPrecision from './getPrecision'
const math = require('mathjs')

/**
 * Sample from input range 
 * @param {[float]} x_s List of inputs
 * @param {function} interpolator Function to apply to interpolated x_s
 */
const sample = (x_s, interpolator) => (
    math.range(x_s[0], x_s[x_s.length - 1], getPrecision(x_s))._data.map((x) => interpolator(x))
)

export default sample