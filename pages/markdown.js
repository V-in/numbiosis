import MethodsLayout from "../layouts/MethodsLayout"
import ReactMarkdown from "react-markdown"

const md = `
# Hello world  
Lorem ipsum at nept 

## Adding images:
![Muller](/static/images/muller_graph.png)
> Caminho com root em /static. Ex: "/static/images/muller_graph.png"
`

export default () => (
  <MethodsLayout>
    <ReactMarkdown source={md} />
  </MethodsLayout>
)
