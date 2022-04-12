import React from 'react'
import classes from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
      <header className={classes.header}>
          <div className={classes.logo}>
              <Image
                  src="/mt2.svg"
                  width={50}
                  height={20}
              ></Image>
              <h2>MiniTube</h2>
          </div>
          <nav  >
              <ul >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  
              </ul>
              
          </nav>

    </header>
  )
}

export default Header