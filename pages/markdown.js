import MethodsLayout from '../layouts/MethodsLayout'
import ReactMarkdown from 'react-markdown'

const md = `
# Hello world 


`

export default () => (
    <MethodsLayout>
        <ReactMarkdown source={md} />
    </MethodsLayout>
)