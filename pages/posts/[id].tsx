import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import utilStyle from "../../styles/utils.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react/index";
import { Layout } from "../../components/layout/layout";

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  };
}

type Props = {
    postData: {
        title: string,
        date: string,
        contentHtml: string
    }
}

export const Post: React.FC<Props> = ({postData}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingXl}>{postData.title}</h1>
        <div className={utilStyle.lightText}>
          <Date dateString={postData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
      </article>
    </Layout>
  )
}
