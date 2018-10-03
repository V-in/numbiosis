import Matrixinput from '../components/MatrixInput'

const callback = (values) => {
    console.log('Values: ', JSON.stringify(values))
}

export default () => (
    <div className='top-gap container'>
        <div>
            <h5>Form test:</h5>
            <div className='flex-left'>
                <Matrixinput rows={3} columns={1} onSubmit={callback} />
            </div>
        </div>
    </div>
)