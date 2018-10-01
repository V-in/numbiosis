import '../static/css/sidebar.css'
import Link from 'next/link'
import Menu from '../constants/menu'
import { withRouter } from 'next/router'

/**
 * App side bar
 */
export default withRouter(({ router }) => (
    <div className='site-aside-desktop-wrapper flex-center site-menu-root'>
        <div className='container-wider site-padding-bottom-0'>
            <div className='site-height-100 flex-left units-gap-big'>
                <aside className='top-gap unit-1-4 flex-vertical scroll-view aside'>
                    <ul className='site-menu-list top-gap-0'>
                        {
                            Menu.map((section, i) => (
                                <MenuSection key={i} name={section.sectionName}>
                                    {section.items.map((item, j) => (
                                        <MenuItem key={j}
                                            name={item.name}
                                            route={item.route}
                                            active={(router.route) == item.route}
                                        />
                                    ))}
                                </MenuSection>
                            ))
                        }
                    </ul>
                </aside>
            </div>
        </div>
    </div>
))

const MenuItem = ({ name, route, active }) => (
    <li className='site-menu-sublist site-text-plain text-small' >
        <Link href={route}>
            <span className={`site-menu-sublist ${active && 'active'}`} >{name}</span>
        </Link>
    </li>
)

const MenuSection = ({ name, children }) => (
    <li className='top-gap'>
        <span>{name}</span>
        <ul>
            {children}
        </ul>
    </li>
)
