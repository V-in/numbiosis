import GenericMethod from "../components/GenericMethod"
import sample from "../lib/utils/sample"
import PlotlyGraph from "../components/PlotlyGraph"
import math from "mathjs"
import getPrecision from "../lib/utils/getPrecision"
import cubicSpline from "../lib/algorithms/spline-cubica"
import MethodsLayout from "../layouts/MethodsLayout"
import Mathjax from "../components/Mathjax"

export default () => (
  <MethodsLayout>
    <div style={{ zIndex: 90 }}>
      <h1>Interpolação por spline cúbica</h1>
      <div className="flex-center">
        <img
          src={require("../static/images/cubic-spline.png")}
          width={300}
          height={300}
        />
      </div>
      <div style={{ textAlign: "justify" }}>
        <Mathjax.Provider>
          <p>
            &emsp; Splines podem ser definidas como funções resultantes da
            junção de várias partes de polinômios. Na spline not-a-knot, &nbsp;
            <Mathjax.Node inline formula={String.raw`S(x)`} />
            &nbsp; não muda para cúbica nos dois primeiros nós internos de cada
            extremo do intervalo &nbsp;
            <Mathjax.Node inline formula={String.raw`x_1`} />
            &nbsp; e &nbsp;
            <Mathjax.Node inline formula={String.raw`x_{n-1}`} />, como ocorre
            nos outros tipos onde a mudança ocorre em cada nó interno, para isso
            os polinômios dos dois primeiros intervalos &nbsp;
            <Mathjax.Node inline formula={String.raw`([x_0, x_1])`} />
            &nbsp; e &nbsp; &nbsp; precisam ser os mesmos. A sua aplicação é
            feita da seguinte forma: impõe-se a continuidade da derivada
            terceira da spline em &nbsp;
            <Mathjax.Node inline formula={String.raw`x_2`} />
            &nbsp; e em &nbsp;
            <Mathjax.Node inline formula={String.raw`x_{n-1}`} />
            &nbsp; e descarta-se os extremos, efetivamente fazendo com que a
            spline se comporte como se esses pontos não fossem mais nós.
          </p>
        </Mathjax.Provider>
      </div>
      <h2>Aplicação</h2>
      <GenericMethod
        f={cubicSpline}
        fields={fields}
        mapFormToArgs={mapFormToArgs}
        renderResult={renderResult}
      />
    </div>
  </MethodsLayout>
)

const mapResultToData = ({ x_s, y_s, interpolator }) => {
  let data = [
    {
      x: x_s,
      y: y_s,
      name: `Entradas`,
      mode: "markers",
      type: "scatter",
      marker: { color: "black" }
    },
    {
      x: math.range(x_s[0], x_s[x_s.length - 1], getPrecision(x_s))._data,
      y: sample(x_s, interpolator),
      name: `Spline`,
      type: "scatter",
      mode: "lines+points",
      marker: { color: "red" }
    }
  ]
  return data
}

const mapFormToArgs = ({ x_s, y_s }) => ({
  x_s: JSON.parse("[" + x_s + "]"),
  y_s: JSON.parse("[" + y_s + "]")
})

const renderResult = result => {
  const data = mapResultToData(result)
  const splines = result.splines
  return (
    <div>
      <div className="flex-center">
        <PlotlyGraph
          data={data}
          layout={{ width: 600, height: 600, title: "Spline cúbica" }}
        />
      </div>
      <table className="table">
        <caption>Coeficientes</caption>
        <thead>
          <tr>
            <td>Spline</td>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
        </thead>
        <tbody>
          {result.splines.map((elem, index) => (
            <tr>
              <td>{index}</td>
              <td>{elem.a}</td>
              <td>{elem.b}</td>
              <td>{elem.c}</td>
              <td>{elem.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const fields = [
  {
    name: "x_s",
    label: "Coordenadas x",
    placeholder: "5 Valores, ex: 0.1, 0.5, 0.9, 1.3, 1.7"
  },
  {
    name: "y_s",
    label: "Coordenadas y",
    placeholder: "5 Valores, ex: -2.3026, -0.69315, -0.10536, 0.26236, 0.53063"
  }
]
