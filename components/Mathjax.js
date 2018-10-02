import dynamic from 'next/dist/lib/dynamic'

const Mathjax = dynamic({
    loader: () => import('react-mathjax'),
    loading: () => <span>Loading...</span>,
    ssr: false,
})

export default Mathjax 