import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Head from 'next/head'
import { FiCalendar } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

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

        <div className={styles.info}>
          <div className={styles.createdAt}>
            <FiCalendar color="var(--gray-100)" />
            <p> 19 Abr 2021</p>
          </div>

          <div className={styles.author}>
            <FiUser color="var(--gray-100)" />
            <p>Roger Sene</p>
          </div>
        </div>
      </div>

      <div className={styles.containerPost}>
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>

        <div className={styles.info}>
          <div className={styles.createdAt}>
            <FiCalendar color="var(--gray-100)" />
            <p> 15 Mar 2021</p>
          </div>

          <div className={styles.author}>
            <FiUser color="var(--gray-100)" />
            <p>Joseph Oliveira</p>
          </div>
        </div>
      </div>

      <div className={styles.containerPost}>
        <h1>Criando um app CRA do zero</h1>
        <p>Tudo sobre como criar sua primeira aplicação utilizando Create React App.</p>

        <div className={styles.info}>
          <div className={styles.createdAt}>
            <FiCalendar color="var(--gray-100)" />
            <p> 19 Abr 2021</p>
          </div>

          <div className={styles.author}>
            <FiUser color="var(--gray-100)" />
            <p>Roger Sene</p>
          </div>
        </div>
      </div>

      <div className={styles.containerPost}>
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>

        <div className={styles.info}>
          <div className={styles.createdAt}>
            <FiCalendar color="var(--gray-100)" />
            <p> 19 Abr 2021</p>
          </div>

          <div className={styles.author}>
            <FiUser color="var(--gray-100)" />
            <p>Roger Sene</p>
          </div>
        </div>
      </div>

      <div className={styles.containerPost}>
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>

        <div className={styles.info}>
          <div className={styles.createdAt}>
            <FiCalendar color="var(--gray-100)" />
            <p> 19 Abr 2021</p>
          </div>

          <div className={styles.author}>
            <FiUser color="var(--gray-100)" />
            <p>Roger Sene</p>
          </div>
        </div>
      </div>
      

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
