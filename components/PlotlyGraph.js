import dynamic from 'next/dist/lib/dynamic';

const PlotlyGraph = dynamic({
    loader: () => import('react-plotly.js'),
    loading: () => <span>Loading...</span>,
    ssr: false
})

export default PlotlyGraph