import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Head from 'next/head'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

 export default function Home() {
   return (
    <>
    <Head>
      <title>Home | Blog Roger </title>
    </Head>

    <main className={styles.contentContainer}>
      <img src="/Logo.svg" alt="logo"/>
      <div className={styles.containerPost}>
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
      </div>
    </main>
    </>
   )
 }

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
