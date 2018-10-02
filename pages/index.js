import GenericMethod from '../components/GenericMethod'

export default () => (
    <div>
        <h1>Homepage</h1>
        <GenericMethod fields={fields} f={() => 'kkkkkkk'} />
    </div>
)


const fields = [
    {
        name: 'a',
        placeholder: 'foo'
    },
    {
        name: 'b',
        placeholder: 'foo'
    },
    {
        name: 'c',
        placeholder: 'foo'
    }
]