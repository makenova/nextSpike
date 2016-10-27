import React from 'react'
import Link from 'next/link'
import { style } from 'next/css'
import Head from 'next/head'

const styles = {
  headContainer: {
    background: '#EEE',
  },
}

const HeaderLink = ({ name, href }) =>
  <span><Link href={href}>{name}</Link> </span>

const Header = () =>
  <div className={style(styles.headContainer)}>
    <Head>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    <h1>Heading</h1>
    <HeaderLink href="/" name={'Home'} />
    <HeaderLink href="/about" name={'About'} />
  </div>

export default Header
