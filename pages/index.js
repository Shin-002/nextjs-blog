import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {client, getEnv} from "../libs/microcms-client";

export async function getStaticProps() {
  const data = await client.get({endpoint: getEnv().endpoint})
  return {
    props: {
      allPostsData: data.contents
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Ciao</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
