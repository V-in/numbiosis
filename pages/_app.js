import App, { Container } from 'next/app'
import Head from 'next/head'
import AppHeader from '../components/AppHeader';
import Sidebar from '../components/Sidebar';

export default class Numbiosis extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps,
            route: router.route
        }
    }

    render() {
        const { Component, pageProps, route } = this.props
        return (
            <Container>
                <Head>
                    <title>Numbiosis</title>
                </Head>
                <AppHeader />
                <Sidebar currentRoute={route} />
                <div className='site-article-wrapper'>
                    <div className='flex-center'>
                        <div className='container-wider'>
                            <div className='flex-left units-gap-big'>
                                <div className='site-height-0 site-aside unit-1-4' />
                                <article className='site-article unit-3-4 unit-1-on-mobile'>
                                    <Component {...pageProps} />
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>{`
                    .site-article-wrapper {
                        margin-top: 3.375rem;
                        overflow: hidden;
                    }
                    .units-gap-big {
                        margin-left: -.9375rem;
                        margin-right: -.9375rem;
                    }
                    .site-menu-root {
                        padding-left: calc(100vw - 100%);
                        margin-right: 0;
                    }
                    input {
                        pointer-events: fill;
                    }
                `}</style>
            </Container>
        )
    }
}