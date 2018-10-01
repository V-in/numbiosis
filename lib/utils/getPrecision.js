const math = require('mathjs')
/**
 * Returns step size necessary to have a resolution of 1 sample every 0.01 units
 * @param {[float]} x_s 
 */
const getPrecision = (x_s) => ((math.abs(x_s[x_s.length - 1]) - math.abs(x_s[0])) * 0.01)

export default getPrecision