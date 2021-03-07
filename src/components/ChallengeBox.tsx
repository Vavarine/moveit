import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.scss';

const challengesTitles = { body: 'Exercite-se', eye: 'Mova os olhos' }

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBox__container}>
      {activeChallenge ? (

        <div className={styles.challengeBox__active}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>
              {challengesTitles[activeChallenge.type]}
            </strong>
            <p>
              É agora Vailsão, bora lá meu parça. {activeChallenge.description}
            </p>
          </main>

          <footer>
            <button
              type="button"
              className={`${styles.challengeBox__button} ${styles.failed}`}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={`${styles.challengeBox__button} ${styles.completed}`}
              onClick={handleChallengeSucceeded}
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