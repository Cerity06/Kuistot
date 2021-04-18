import React from 'react'
import Search from './Search'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <div className={styles.logo}>
                <Link href='/'><a>
                <Image src="/appetit.png" width='100%' height='100%' />
                </a></Link>
                <h1>Kuistot</h1>
            </div>
            <div>
                <ul className={styles.links}>
                    <li><Link href='/'><img src="https://s2.svgbox.net/materialui.svg?ic=home&color=000" width="32" height="32"/></Link></li>
                    <li><Link href='/search'><img src="https://s2.svgbox.net/hero-outline.svg?ic=search&color=000" width="32" height="32" /></Link></li>
                    <li><Link href='/random'><img src="https://s2.svgbox.net/materialui.svg?ic=restaurant&color=000000" width="32" height="32" /></Link></li>
                </ul>
                
               
                
            </div>
        </nav>
    )
}


export default NavBar
