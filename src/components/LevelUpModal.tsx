import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.scss';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.levelUpModal__overlay}>
      <div className={styles.levelUpModal__container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou o próximo level.</p>

        <button className={styles.levelUpModal__buttonTwitter} type='button'>
          <img src="/icons/twitter.svg" alt="Fechar" />
        </button>

        <button type='button' onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </div>
    </div>
  )
}
