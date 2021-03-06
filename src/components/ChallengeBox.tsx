import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.scss';

function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBox__container}>
      {hasActiveChallenge ? (
        <div className={styles.challengeBox__active}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Execite-se</strong>
            <p>
              É agora Vailsão, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.
            </p>
          </main>

          <footer>
            <button
              type="button"
              className={`${styles.challengeBox__button} ${styles.failed}`}
            >
              Falhei
            </button>
            <button
              type="button"
              className={`${styles.challengeBox__button} ${styles.completed}`}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeBox__notActive}>
            <strong>Finalize um cliclo para receber desafios</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
            Avançe de level completando os desafios.
          </p>
          </div>
        )}
    </div>
  )
}

export default ChallengeBox;