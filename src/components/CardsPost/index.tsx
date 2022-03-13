
import { FiCalendar, FiUser } from 'react-icons/fi'
import styles from './cardsPost.module.scss'


export default function CardsPost() {
  return(
  <>
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
  </>
  )
}