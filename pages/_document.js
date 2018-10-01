import Document, { Head, Main, NextScript } from 'next/document'
import('../static/css/mobi.min.css')

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/static/css/mobi.min.css" />
                    <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
                </Head>
                <body className='body'>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}