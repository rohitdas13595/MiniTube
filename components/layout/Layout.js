import React from 'react'
import classes from './Layout.module.css';
import Header from '../header/Header'
import Footer from '../footer/Footer';
import Head from 'next/head'
const Layout = (props) => {
  return (
    <div >
      
          <Header></Header>
          <main className={classes.main}>
              {props.children}
      </main>
      <Footer></Footer>
          
    </div>
  )
}

export default Layout