import dynamic from 'next/dynamic'

const Provider = dynamic(() => import('react-mathjax/lib/Provider'), {
    loading: () => <span>Loading...</span>,
    ssr: false
})

const Node = dynamic(() => import('react-mathjax/lib/Node'), {
    loading: () => <span>Loading...</span>,
    ssr: false
})


export default {
    Provider,
    Node
}
