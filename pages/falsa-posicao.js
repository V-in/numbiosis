import GenericMethod from "../components/GenericMethod"
import MethodsLayout from "../layouts/MethodsLayout"
import PlotlyGraph from "../components/PlotlyGraph"
import regula_falsi from "../lib/algorithms/regula_falsi"

export default () => (
  <MethodsLayout>
    <div>
      <h1>Falsa posição</h1>
      <div style={{ textAlign: "center" }}>
        <img src={require("../static/images/regula_falsi.png")} width={300} />
      </div>
      <div style={{ textAlign: "justify" }}>
        <p>
          &emsp; A partir de um intervalo [a, b], seja f(x) uma função contínua
          no dado intervalo e sua raiz pertence a [a, b], tal que f(raiz) = 0.
          Este método procura particionar o intervalo [a, b], na interseção da
          reta que une os pontos (a, f(a)) e (b, f(b)) com o eixo x. Escolhe-se
          então um novo subintervalo conforme for a variação do sinal da curva
          f.
        </p>
        <p>
          &emsp; Primeiro, deve-se escolher um intervalo tal que f(a).f(b) &lt;
          0 (teste de sinal), dessa forma sabemos que a função corta o eixo x.
          Depois, calculamos a média aritmética ponderada (xm) entre a e b, com
          pesos |f(b)| e |f(a)|, respectivamente. Por último, multiplicamos f(a)
          com f(xm), se o resultado for menor que 0, a raiz pertence a [a, xm],
          maior que 0, a raiz pertence a [xm, b], e se for igual a 0, a raiz é
          xm. Com os novos intervalos obtidos, repetimos o segundo passo até
          acharmos uma boa aproximação da raiz da função.
        </p>
        <p>
          &emsp; O Método da Falsa Posição estima o “ponto médio” do intervalo
          pela interseção de uma reta secante. Ele é eficiente em considerar a
          magnitude de f(a) e f(b), ou seja, que ponto está mais próximo à raiz,
          já que partimos do princípio de que a raiz deve estar mais próxima do
          ponto que apresenta o menor valor da função.
        </p>
      </div>
      <h2>Aplicação</h2>
      <div>
        <GenericMethod
          fields={fields}
          f={regula_falsi}
          renderResult={renderResult}
        />
      </div>
    </div>
  </MethodsLayout>
)

const fields = [
  {
    name: "f",
    placeholder: "x**2 - 6",
    label: "Função"
  },
  {
    name: "a",
    placeholder: "0",
    label: "Valor A"
  },
  {
    name: "b",
    placeholder: "4",
    label: "Valor B"
  },
  {
    name: "tol",
    placeholder: "2e-10",
    label: "Tolerância"
  },
  {
    name: "N",
    placeholder: "5",
    label: "Iterações"
  }
]

const renderResult = ({ x_s, fx_s }) => {
  console.log("x_s:", x_s)
  console.log("fx_s:", fx_s)
  return (
    <div>
      <div className="flex-center">
        <PlotlyGraph
          data={[
            {
              x: x_s,
              y: fx_s,
              mode: "markers",
              type: "scatter",
              marker: {
                size: 8,
                color: x_s.map((elem, i) => i)
              }
            }
          ]}
          layout={{
            title: "Resultado",
            width: 600,
            height: 400
          }}
        />
      </div>
      <b>{`Resultado: `}</b>
      <span>{fx_s[fx_s.length - 1]}</span>
    </div>
  )
}
