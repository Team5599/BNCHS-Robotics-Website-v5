import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'

import styles from './navbar.module.css';

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

/*
    This is a PLACEHOLDER Navbar
    Later we'll implement a proper navbar that
        + scales/compacts on mobile
        + has dropdowns for more nav links
        + has "smart" higlighting depending on the page
        + nice animations
        + sticky navbar that scrolls, resizes & recolors, and moves with page

    IDEAS
        + Logo could animate and 'swirl' in
*/

const NavbarButton = ({label, url, router} : {label : string, url : string, router : NextRouter}) => {

    const isActive = router.pathname.toLocaleLowerCase() == url.toLocaleLowerCase();

    return (
        <a href={url} className={[styles['navbar-item'], inter.className, (isActive) && styles['navbar-item-active'],].join(" ")}>
            {label}
        </a>
    )
}

const NavLogo = () => {
    return (
        <a href="/" className={styles['navbar-logo']}>
            <Image
                src="/assets/images/Logo.png"
                height={32}
                width={32}
                style={{
                    borderRadius : 4
                }}
                alt="The Sentinels Logo"
                priority
            />
            <span>
                The Sentinels
            </span>
        </a>
    )
}
const Navbar = () => {

    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            { /* Left Side Navbar */ }
            <div>
                <NavLogo/>
            </div>
            { /* Right Side Navbar */ }
            <div>
                <NavbarButton label={'Home'} url={'/'} router={router}/>
                <NavbarButton label={'Team'} url={'/Team'} router={router}/>
                <NavbarButton label={'Robots'} url={'/Robots'} router={router}/>
                <NavbarButton label={'Blog'} url={'/Blog'} router={router}/>
                <NavbarButton label={'Sponsors'} url={'/Sponsors'} router={router}/>
                <NavbarButton label={'Contact Us'} url={'/Contact'} router={router}/>
            </div>
        </nav>
    )
}

export default Navbar;