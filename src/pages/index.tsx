import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Head from 'next/head'
import { FiCalendar } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import Header from '../components/Header/index';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import CardsPost from '../components/CardsPost';

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
      <Header />
      < CardsPost />      

      <a href="">Carregar mais posts</a>
    </main>
    </>
   )
 }

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
