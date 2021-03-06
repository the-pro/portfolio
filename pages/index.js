import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ayas Behera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout home>
        <section className={utilStyles.headingMd}>
        <p className={utilStyles.font}>Hi, I am Ayas.
          I like solving problems (not just programming). 
          I also like to develop web applications and contribute to open source projects. I use javascript to do that.
          I have previously contributed to <a href='https://github.com/juice-shop'> @juice-shop</a> and <a href='https://github.com/internetarchive'>@internetarchive</a>.
          Currently I am working on the juice-shop project as my project for the <strong>GSoC 2021</strong> with <a href='https://github.com/OWASP'>OWASP Foundation</a>.  </p>
          I use this to document my work and write about some stuff about whatever I know with my limited knowledge in JavaScript. 

          If you want to connect with me, you can follow me on <a href='https://twitter.com/ayasbehera'>twitter</a> or send a connection request on <a href='https://linkedin.com/ayas-behera'>Linked[in]</a>.

          
        <p className={utilStyles.font}>PS: I am also a 4 star programmer at codechef</p>
      </section>
      <section className={utilStyles.headingMd}>
          <h2 className={utilStyles.font}>My Blogs</h2>
          <a href="/posts/blog-javascript-event-loop" className={utilStyles.font}>
            Event Loop: How Javascript Works
          </a>
          <p className={utilStyles.lightText}>01 June, 2021</p>
          <a href="/posts/blog-gsoc" className={utilStyles.font}>
            GSoC: How does the whole thing work! 
          </a>
          [Yet to be published]
          <p className={utilStyles.lightText}>Wait for it</p>
          <a href="https://www.geeksforgeeks.org/why-we-use-then-method-in-javascript/" className={utilStyles.font}>
            Why do we use the then() method in javascript
          </a>
          <p className={utilStyles.lightText}>30 June, 2020</p>
          
        </section>
      </Layout>
        {/* <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          // text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Hi, I am Ayas. Let me brag a bit about myself.
//           I am very good at solving problems (not just programming). 
//           I also like to develop web applications. I use javascript to do that. </p>
//         <p>PS: I also do competitive programming
//         </p>
//       </section>
//     </Layout>
//   )
// }
