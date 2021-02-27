import Head from 'next/head';
import { css } from '@emotion/css';

export function Page({ children, ...props }) {
  return (
    <>
      <Head>
        <title>Sharktooth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        `}
      >
        <nav
          className={css`
            display: flex;
            padding: 1rem;
            text-align: center;
            border: 1px solid black;

            h1 {
              flex-grow: 1;
              text-align: left;
            }

            a {
              padding: 1rem;
            }
          `}
        >
          <h1>
            <a href="/">Sharktooth</a>
          </h1>
          <a href="/hospitality">hospitality</a>
          <a href="/services">services</a>
          <a href="/shop">shop</a>
          <a href="/archive">archive</a>
        </nav>

        <header></header>

        <main
          className={css`
            flex-grow: 1;
          `}
        >
          {children}
        </main>

        <footer
          className={css`
            padding: 5rem;
            background: #e9ded7;
          `}
        >
          <a
            href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
          </a>
        </footer>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
