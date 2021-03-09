import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.scss';

function ExperienceBar() {
  const { currentExpirience, experinceToNextLevel } = useContext(ChallengesContext);
  const percentoToNextLevel = Math.round(currentExpirience * 100 / experinceToNextLevel);

  return (
    <header className={styles.experienceBar} >
      <span>0  xp</span>
      <div className={styles.experienceBar__bar}>
        <div style={{ width: `${percentoToNextLevel}%` }} />
        <span
          className={styles.experienceBar__current}
          style={{ left: `${percentoToNextLevel}%` }}
        >{currentExpirience} xp</span>
      </div>
      <span>{experinceToNextLevel} xp</span>
    </header>
  );
}

export default ExperienceBar;