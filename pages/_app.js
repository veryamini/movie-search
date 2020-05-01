import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400&display=swap"
          rel="stylesheet"
          key="google-font-roboto"
          />
        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </div>
    );
  }
}