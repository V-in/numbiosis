
const X = [0.1, 0.5, 0.9, 1.3, 1.7];
const Y = [-2.3026, -0.69315, -0.10536, 0.26236, 0.53063];
const x = 0.8;


var splines = [];
for (let i = 0; i < X.length; i++) {
    splines.push({ a: null, b: null, c: null, d: null, x: null });
}

function BuildSpline(x, y) {
    const n = x.length;
    for (let i = 0; i < n; i++) {
        splines[i].x = x[i];
        splines[i].a = y[i];
    }
    splines[0].c = splines[n - 1].c = 0;


    var alpha = new Array(n - 1).fill(0);
    var beta = new Array(n - 1).fill(0);
    for (var i = 1; i < n - 1; ++i) {
        var hi = x[i] - x[i - 1];
        var hi1 = x[i + 1] - x[i];
        var A = hi;
        var C = 2.0 * (hi + hi1);
        var B = hi1;
        var F = 6.0 * ((y[i + 1] - y[i]) / hi1 - (y[i] - y[i - 1]) / hi);
        var z = (A * alpha[i - 1] + C);
        alpha[i] = -B / z;
        beta[i] = (F - A * beta[i - 1]) / z;
    }


    for (var i = n - 2; i > 0; --i) {
        splines[i].c = alpha[i] * splines[i + 1].c + beta[i];
    }


    for (var i = n - 1; i > 0; --i) {
        var hi = x[i] - x[i - 1];
        splines[i].d = (splines[i].c - splines[i - 1].c) / hi;
        splines[i].b = hi * (2.0 * splines[i].c + splines[i - 1].c) / 6.0 + (y[i] - y[i - 1]) / hi;
    }
}

function Interpolate(x) {
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

BuildSpline(X, Y);
console.log(JSON.stringify(splines));
console.log(Interpolate(0.8));
