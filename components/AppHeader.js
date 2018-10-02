import Link from 'next/link'
import { withRouter } from 'next/router'

class AppHeader extends React.PureComponent {
    render() {
        let {
            router
        } = this.props

        return (
            <header className="site-header flex-center site-menu-root">
                <div className="container-wider">
                    <div className="flex-left units-gap-big">
                        <div className="unit-1-4">
                            <Link href="/">
                                <div className='site-text-plain site-side-title flex-middle'>
                                    <img src='/static/svgs/mini_logo.svg' width={30} height={30} />
                                    &nbsp;&nbsp;Numbiosis
                        </div>
                            </Link>
                        </div>
                        <div className='unit-3-4'>
                            <div className='flex-midle units-gap-big'>
                                <Link href='/' prefetch>
                                    <span className={`unit-0 ${router.route == '/' && 'active'}`} > Home</span>
                                </Link>
                                <Link href='/about' prefetch>
                                    <span className={`unit-0 ${router.route === '/about' && 'active'}`} >About</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
            .active {
                font-weight: bold;
            }
            .site-header {
                background: #fff;
                left: 0;
                padding-top: .9375rem;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 10;
            }
            .unit-0.false {
                color: gray;
            }
            .unit-0.false:hover {
                color: black;
            }
        `}</style>
            </header >
        )
    }
}


export default withRouter(AppHeader)
