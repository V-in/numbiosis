import dynamic from 'next/dynamic'

const Provider = dynamic({
    loader: () => import('react-mathjax/lib/Provider'),
    loading: () => <span>Loading...</span>
})

const Node = dynamic({
    loader: () => import('react-mathjax/lib/Node'),
    loading: () => <span>Loading...</span>
})


export {
    Provider,
    Node
}
