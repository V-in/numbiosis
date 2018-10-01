import PlotlyGraph from '../components/PlotlyGraph'
import getPrecision from '../lib/utils/getPrecision'
const math = require('mathjs')

const x_s = [0.1, 0.5, 0.9, 1.3, 1.7];
const y_s = [-2.3026, -0.69315, -0.10536, 0.26236, 0.53063];
//Saida da funcao de karina
const splines = [
    {
        a: -2.3026,
        b: null,
        c: 0,
        d: null,
        x: 0.1
    },
    {
        a: -0.69315,
        b: 2.725047321428571,
        c: -9.73933258928571,
        d: -24.348331473214273,
        x: 0.5
    },
    {
        a: -0.10536,
        b: 0.9061968750000001,
        c: 0.6450803571428549,
        d: 25.96103236607141,
        x: 0.9
    },
    {
        a: 0.26236,
        b: 0.8164901785714286,
        c: -1.0936138392857122,
        d: -4.346735491071418,
        x: 1.3
    },
    {
        a: 0.53063,
        b: 0.5977674107142862,
        c: 0,
        d: 2.734034598214281,
        x: 1.7
    }
]


const sample = (x_s) => {
    console.log('Olha isso: ', Interpolate(0.5))
    //let res = math.range(0.1, 1.7, 0.1)._data.map((x) => Interpolate(x))
    let res = math.range(x_s[0], x_s[x_s.length - 1], getPrecision(x_s))._data.map((x) => Interpolate(x))
    console.log(res)
    return res
}

const Interpolate = (x) => {
    if (splines == null) {
        return NaN;
    }

    const n = splines.length;
    var s = { a: null, b: null, c: null, d: null, x: null };

    if (x <= splines[0].x) {
        s = splines[0];
    }
    else if (x >= splines[n - 1].x) {
        s = splines[n - 1];
    }
    else {
        var i = 0;
        var j = n - 1;
        while (i + 1 < j) {
            var k = i + (j - i) / 2;
            if (x <= splines[k].x) {
                j = k;
            }
            else {
                i = k;
            }
        }
        s = splines[j];
    }

    var dx = x - s.x;
    return s.a + (s.b + (s.c / 2.0 + s.d * dx / 6.0) * dx) * dx;
}

/**
 * Maps spline-cubica algorithm output to plotly-consumable data structure
 * @param {[float]} x_s  
 * @param {[float]} y_s  
 * @param {{a: float, b: float, c: float, d: float}} result Algorithm's output
 */
const mapResultToData = (x_s, y_s) => {
    let data = [
        {
            x: x_s,
            y: y_s,
            name: `Entradas`,
            type: 'dots',
            //mode: 'points',
            marker: { color: 'black' },
        },
        {
            x: math.range(x_s[0], x_s[x_s.length - 1], getPrecision(x_s))._data,
            y: sample(x_s),
            name: `Spline`,
            type: 'scatter',
            mode: 'lines+points',
            marker: { color: 'red' },
        }
    ]
    return data
}

/**
 * Builds 3 degree polynomial function from coefficients
 * @param {[integer list]} x_s 
 * @param {{a: float, b: float, c: float, d: float}} thrid degree polynomial coefficients
 */
let foo = (x) => (d * (x ** 3) + c * (x ** 2) + b * x + a)


const pRange = (x_s, { a, b, c, d }) => x_s.map((x) => karina(x))

export default class Spline extends React.Component {
    render() {
        return (
            < div className='flex-center' >
                <PlotlyGraph
                    data={mapResultToData(x_s, y_s)}
                    layout={{ width: 600, height: 600, title: 'Spline cúbica' }}
                />
            </div >
        )
    }
}