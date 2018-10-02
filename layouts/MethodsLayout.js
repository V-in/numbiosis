import React from 'react'
import Sidebar from '../components/Sidebar'
import AppHeader from '../components/AppHeader'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { Container } from 'next/app'

class MethodsLayout extends React.Component {
    render() {
        let {
            children,
            router
        } = this.props
        return (
            <Container>
                <Head>
                    <title>Numbiosis</title>
                </Head>
                <AppHeader />
                <Sidebar currentRoute={router.route} />
                <div className='site-article-wrapper'>
                    <div className='flex-center'>
                        <div className='container-wider'>
                            <div className='flex-left units-gap-big'>
                                <div className='site-height-0 site-aside unit-1-4' />
                                <article className='site-article unit-3-4 unit-1-on-mobile'>
                                    {children}
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

export default withRouter(MethodsLayout)