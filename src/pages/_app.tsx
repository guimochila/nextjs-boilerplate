import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import globalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Pro - Boiler plate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJs and Emotion"
        />
      </Head>
      <Component {...pageProps} />
      <Global styles={globalStyles} />
    </>
  )
}

export default MyApp
